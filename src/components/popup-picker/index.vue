<template>
  <vx-popup :open="open" :history="history" @close="handleClose">
    <template v-slot:header>
      <div :class="['vx-popup-picker--header']">
        <button type="button" class="vx-popup-picker--cancel" @click="handleClose">{{cancelText}}</button>
        <button type="button" :class="['vx-popup-picker--placeholder']">{{placeholder}}</button>
        <button type="button" class="vx-popup-picker--confirm" @click="handleConfirm">{{confirmText}}</button>
      </div>
    </template>
    <div :class="['vx-popup-picker']">
      <vx-picker
        v-for="(item,index) in myPickers"
        :class="['vx-popup-picker--item']"
        :key="index"
        :modelValue="item.value"
        :placeholder="item.placeholder"
        :options="item.options"
        @update:modelValue="handleChange($event,index)"
      />
    </div>
  </vx-popup>
</template>

<script>
import VxPopup from '../popup'
import VxPicker from '../picker'
import { watch, ref } from 'vue'

export default {
  name: 'VxPopupPicker',
  components: {
    VxPopup,
    VxPicker
  },
  props: {
    modelValue: {},
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
  setup (props, { emit }) {
    const myPickers = ref(props.pickers)
    watch(() => props.pickers, val => {
      this.myPickers.value = val
    })
    const handleClose = () => {
      emit('update:open', false)
      emit('close')
    }
    return {
      myPickers,
      handleClose,
      handleConfirm () {
        emit('confirm')
        let value = myPickers.value.map(item => {
          return {
            value: item.value
          }
        })
        if (!props.modelValue || value.toString() !== props.modelValue.toString()) {
          if (props.open) {
            emit('update:open', false)
            emit('update:modelValue', value)
          }
        } else {
          handleClose()
        }
      },
      handleChange (value, index) {
        myPickers.value[index].value = value
        emit('pickerchange', value, index)
      }
    }
  }
}
</script>
