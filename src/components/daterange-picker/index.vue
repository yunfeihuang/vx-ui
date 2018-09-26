<template>
  <popup
   :class="['vx-daterange-picker--wrapper']"
   :open="open"
   :history="history"
   :fast-close="false"
   direction="top"
   @open="handleOpen"
   @close="handleClose"
   @close-after="handleCloseAfter">
    <div class="vx-daterange-picker">
      <calendar-range ref="calendarRange" v-bind="$props" v-model="myValue" />
    </div>
    <flexbox class="vx-daterange-picker--footer" slot="footer">
      <button type="button" class="vx-daterange-picker--cancel" @click="handleClose">{{cancelText}}</button>
      <flexbox-item>
        <button type="button" class="vx-daterange-picker--clear" @click="handleClear">{{clearText}}</button>
      </flexbox-item>
      <button type="button" class="vx-daterange-picker--confirm" @click="handleConfirm">{{confirmText}}</button>
    </flexbox>
  </popup>
</template>

<script>
import Popup from '../popup'
import {Flexbox, FlexboxItem} from '../flexbox'
import CalendarRange from '../calendar-range'

export default {
  componentName: 'DateRangePicker',
  components: {
    Popup,
    Flexbox,
    FlexboxItem,
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
    value: {
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
    clearText: {
      type: String,
      default: '清空'
    }
  },
  data () {
    return {
      myValue: this.value
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
      this.$emit('input', this.myValue).$emit('change', this.myValue)
      this.handleClose()
    },
    handleClear () {
      this.myValue = []
    },
    handleOpen () {
      this.$refs.calendarRange.$refs.tab.computedStyle()
    },
    handleCloseAfter () {
      this.$emit('close-after')
    }
  }
}
</script>
