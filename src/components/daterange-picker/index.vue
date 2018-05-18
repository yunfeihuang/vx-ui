<template>
  <popup :open="open" :history="history" @open="handleOpen" @close="handleClose" :fast-close="false" direction="top" :class="['vx-daterange-picker-wrapper']">
    <div :class="classes" v-if="open">
      <calendar-range ref="calendarRange" v-bind="$props" v-model="myValue" />
      <divider></divider>
      <flexbox :class="['vx-daterange-picker-footer']">
        <button type="button" :class="['vx-daterange-picker-cancel']" @click="handleClose">{{cancelText}}</button>
        <flexbox-item>
          <button type="button" :class="['vx-daterange-picker-clear']" @click="handleClear">{{clearText}}</button>
        </flexbox-item>
        <button type="button" :class="['vx-daterange-picker-confirm']" @click="handleConfirm">{{confirmText}}</button>
      </flexbox>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import {Flexbox, FlexboxItem} from '../flexbox'
import Divider from '../divider'
import CalendarRange from '../calendar-range'

export default {
  componentName: 'DateRangePicker',
  components: {
    Popup,
    Divider,
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
  computed: {
    classes () {
      return ['vx-daterange-picker']
    }
  },
  data () {
    return {
      myValue: this.value
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
    }
  }
}
</script>
