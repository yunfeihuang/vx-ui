<template>
  <popup :open="open" :history="history" @close="handleClose">
    <template v-slot:header>
      <div :class="['vx-popup-picker--header']">
        <button type="button" class="vx-popup-picker--cancel" @click="handleClose">{{cancelText}}</button>
        <button type="button" :class="['vx-popup-picker--placeholder']">{{placeholder}}</button>
        <button type="button" class="vx-popup-picker--confirm" @click="handleConfirm">{{confirmText}}</button>
      </div>
    </template>
    <div :class="['vx-popup-picker']">
      <picker
        v-for="(item,index) in myPickers"
        :class="['vx-popup-picker--item']"
        :key="index"
        :value="item.value"
        :placeholder="item.placeholder"
        :options="item.options"
        @change="handleChange($event,index)"
      />
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import Picker from '../picker'

export default {
  name: 'VxPopupPicker',
  components: {
    Popup,
    Picker
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
    handleClose () {
      this.$emit('update:open', false)
      this.$emit('close')
    },
    handleConfirm () {
      this.$emit('confirm')
      let value = this.myPickers.map(item => {
        return {
          value: item.value
        }
      })
      if (!this.value || value.toString() !== this.value.toString()) {
        this.open && this.$emit('update:open', false) && this.$emit('update:modelValue', value) && this.$emit('change', value)
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
