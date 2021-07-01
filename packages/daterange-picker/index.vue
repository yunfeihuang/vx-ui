<template>
  <popup
   :class="['vx-daterange-picker--wrapper']"
   :open="open"
   :history="history"
   :fast-close="false"
   direction="top"
   @close="handleClose">
    <div class="vx-daterange-picker">
      <calendar-range ref="calendarRange" v-bind="$props" v-model="myValue" />
    </div>
    <template v-slot:footer>
      <div class="vx-daterange-picker--footer">
        <button type="button" class="vx-daterange-picker--cancel" @click="handleClose">{{cancelText}}</button>
        <div>
          <button type="button" class="vx-daterange-picker--clearable" @click="handleClear">{{clearableText}}</button>
        </div>
        <button type="button" class="vx-daterange-picker--confirm" @click="handleConfirm">{{confirmText}}</button>
      </div>
    </template>
  </popup>
</template>

<script>
import Popup from '../popup'
import CalendarRange from '../calendar-range'
import { ref, watch } from 'vue'

export default {
  name: 'VxDateRangePicker',
  components: {
    Popup,
    CalendarRange
  },
  props: {
    ...CalendarRange.props,
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Array,
      default () {
        return []
      }
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    clearableText: {
      type: String,
      default: '清空'
    }
  },
  setup (props, { emit }) {
    const calendarRange = ref(null)
    const myValue = ref(props.modelValue)
    watch(() => props.modelValue, val => {
      myValue.value = val
    })
    return {
      myValue,
      calendarRange,
      handleClose () {
        emit('close')
      },
      handleConfirm () {
        emit('update:modelValue', this.myValue)
        emit('close')
      },
      handleClear () {
        myValue.value = []
      }
    }
  }
}
</script>
