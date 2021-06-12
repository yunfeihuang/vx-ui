<template>
  <popup
   :class="['vx-daterange-picker--wrapper']"
   :open="open"
   :history="history"
   :fast-close="false"
   direction="top"
   @open="handleOpen"
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
  data () {
    return {
      myValue: this.modelValue
    }
  },
  watch: {
    value (value) {
      this.myValue = value
    }
  },
  methods: {
    handleClose () {
      this.$emit('close')
    },
    handleConfirm () {
      this.$emit('update:modelValue', this.myValue)
      this.$emit('update:modelValue', this.myValue)
      this.$emit('change', this.myValue)
      this.handleClose()
    },
    handleClear () {
      this.myValue = []
    },
    handleOpen () {
      this.$refs.calendarRange.$refs.tab.computedStyle()
    }
  }
}
</script>
