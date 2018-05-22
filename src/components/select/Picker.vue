<template>
  <popup :open="open" :history="history" @close="handleClose" :direction="direction">
    <div :class="classes">
      <div v-if="max != 1" :class="['vx-flexbox','vx-popup-picker-header']">
        <button type="button" :class="['vx-popup-picker-cancel']" @click="handleCancel">{{cancelText}}</button>
        <button type="button" :class="['vx-flexbox-item','vx-popup-picker-placeholder']">{{placeholder}}</button>
        <button type="button" :disabled="this.required && !this.myValue.length" :class="['vx-popup-picker-confirm']" @click="handleConfirm">{{confirmText}}</button>
      </div>
      <div :class="['vx-option-picker']">
        <checkbox-group :max="max" @change="handleChange" :value="myValue">
          <checkbox
            v-for="(item,index) in myOptions"
            :value="item.value"
            :key="index"
            :disabled="item.disabled"
            >
            <div v-html="item.html || item.label"></div>
          </checkbox>
        </checkbox-group>
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import {CheckboxGroup, Checkbox} from '../checkbox'

export default {
  componentName: 'OptionGroupPicker',
  components: {
    Popup,
    Checkbox,
    CheckboxGroup
  },
  props: {
    ...CheckboxGroup.props,
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    options: {
      type: Array
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    direction: {
      type: String,
      default: 'bottom'
    }
  },
  computed: {
    classes () {
      return ['vx-option-picker-wrapper']
    }
  },
  watch: {
    options (value) {
      this.myOptions = value
    },
    value (value) {
      this.myValue = value
    }
  },
  data () {
    return {
      myOptions: this.options,
      myValue: this.value
    }
  },
  methods: {
    handleCancel () {
      this.$emit('close')
    },
    handleClose () {
      this.$emit('close')
    },
    handleConfirm () {
      this.open && this.$emit('change', this.myValue).$emit('input', this.myValue)
    },
    handleChange (value) {
      if (this.max === 1) {
        this.open && this.$emit('input', value[0]).$emit('change', value[0])
      } else {
        this.myValue = value
      }
    }
  }
}
</script>
