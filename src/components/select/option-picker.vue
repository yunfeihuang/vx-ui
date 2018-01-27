<template>
  <popup :open="open" :history="history" @on-close="handleClose">
    <div :class="classes">
      <div v-if="checkedMaxItem != 1" :class="[$cssPrefix + 'flexbox',$cssPrefix + 'popup-picker-header']">
        <button type="button" :class="[$cssPrefix + 'popup-picker-cancel']" @click="handleCancel">{{cancelText}}</button>
        <button type="button" :class="[$cssPrefix + 'flexbox-item',$cssPrefix + 'popup-picker-placeholder']">{{placeholder}}</button>
        <button type="button" :disabled="this.required && !this.myValue.length" :class="[$cssPrefix + 'popup-picker-confirm']" @click="handleConfirm">{{confirmText}}</button>
      </div>
      <divider v-if="checkedMaxItem != 1"></divider>
      <div :class="[$cssPrefix + 'option-picker']">
        <checkbox-group direction="reverse" :checked-max-item="checkedMaxItem" :options="myOptions" @on-change="handleChange" :value="myValue"/>
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import {CheckboxGroup, Checkbox} from '../checkbox'
import Divider from '../divider'

export default {
  name: 'OptionPicker',
  components: {
    Popup,
    Checkbox,
    CheckboxGroup,
    Divider
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
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'option-picker-wrapper']
    }
  },
  watch: {
    options (value) {
      this.myOptions = value
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
      this.$emit('on-close')
    },
    handleClose () {
      this.$emit('on-close')
    },
    handleConfirm () {
      this.open && this.$emit('on-change', this.myValue).$emit('input', this.myValue)
    },
    handleChange (value) {
      if (this.checkedMaxItem === 1) {
        this.open && this.$emit('input', value).$emit('on-change', value)
      } else {
        this.myValue = value
      }
    }
  }
}
</script>
