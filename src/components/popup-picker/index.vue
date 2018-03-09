<template>
  <popup :open="open" :history="history" @close="handleClose">
    <div :class="classes">
      <div :class="[$cssPrefix + 'flexbox',$cssPrefix + 'popup-picker-header']">
        <button type="button" :class="[$cssPrefix + 'popup-picker-cancel']" @click="handleCancel">{{cancelText}}</button>
        <button type="button" :class="[$cssPrefix + 'flexbox-item',$cssPrefix + 'popup-picker-placeholder']">{{placeholder}}</button>
        <button type="button" :class="[$cssPrefix + 'popup-picker-confirm']" @click="handleConfirm">{{confirmText}}</button>
      </div>
      <divider></divider>
      <div :class="[$cssPrefix + 'flexbox',$cssPrefix + 'popup-picker']">
        <picker
          v-if="open && myPickers"
          v-for="(item,index) in myPickers"
          :class="[$cssPrefix + 'flexbox-item',$cssPrefix + 'popup-picker-item']"
          :key="index"
          :value="item.value"
          :placeholder="item.placeholder"
          :options="item.options"
          @change="handleChange($event,index)"
        />
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import Picker from '../picker'
import Divider from '../divider'

export default {
  componentName: 'PopupPicker',
  components: {
    Popup,
    Picker,
    Divider
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    pickers: {
      type: Array
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
      default: '完成'
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'popup-picker-wrapper']
    }
  },
  watch: {
    pickers (value) {
      this.myPickers = value
    }
  },
  data () {
    return {
      myPickers: this.pickers
    }
  },
  methods: {
    handleCancel () {
      this.$emit('update:open', false).$emit('close')
    },
    handleClose () {
      this.$emit('update:open', false).$emit('close')
    },
    handleConfirm () {
      this.$emit('confirm')
      let value = this.myPickers.map(item => {
        return {
          value: item.value
        }
      })
      if (!this.value || value.toString() !== this.value.toString()) {
        this.open && this.$emit('update:open', false).$emit('input', value).$emit('change', value)
      } else {
        this.handleClose()
      }
    },
    handleChange (value, index) {
      this.myPickers[index].value = value
      this.$emit('pickerchange', value, index)
    }
  }
}
</script>
