<template>
  <popup :open="open" :history="history" @close="handleClose" :fast-close="false">
    <div :class="classes">
      <div :class="[$cssPrefix + 'flexbox',$cssPrefix + 'datetime-picker-header']">
        <button type="button" :class="[$cssPrefix + 'datetime-picker-cancel']" @click="handleCancel">{{cancelText}}</button>
        <div :class="[$cssPrefix + 'flexbox-item',$cssPrefix + 'datetime-picker-today']">
          <!--
          <button type="button" :class="[$cssPrefix + 'datetime-picker-today']" @click="handleToday">{{todayText}}</button>
          -->
        </div>
        <button type="button" :class="[$cssPrefix + 'datetime-picker-confirm']" @click="handleConfirm">{{confirmText}}</button>
      </div>
      <divider></divider>
      <div :class="[$cssPrefix + 'flexbox',$cssPrefix + 'datetime-picker']">
        <picker
          v-if="pickers"
          v-for="(item,index) in pickers"
          :class="[$cssPrefix + 'flexbox-item',$cssPrefix + 'datetime-picker-item']"
          :index="index+'-'+item.type"
          :key="index+'-'+item.type"
          :data-type="item.type"
          :value="item.value"
          :placeholder="item.placeholder"
          :options="item.options"
          @change="handleChange($event, index, item.type)"
        />
      </div>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import Picker from '../picker'
import Divider from '../divider'

let now = new Date()

export default {
  componentName: 'DatetimePicker',
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
    min: {
      type: String,
      default: '1900-01-01'
    },
    max: {
      type: String,
      default: `${now.getFullYear() + 20}-01-01`
    },
    value: {
      type: String,
      default: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}`
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    locale: {
      type: Object,
      default () {
        return {
          year: '年',
          month: '月',
          date: '日',
          hour: '时',
          minute: '分',
          second: '秒'
        }
      }
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '完成'
    },
    todayText: {
      type: String,
      default: '当前'
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'popup-picker-wrapper']
    }
  },
  mounted () {
    this.open && this.initial()
  },
  watch: {
    open (value) {
      value && this.initial()
    }
  },
  data () {
    return {
      pickers: []
    }
  },
  methods: {
    parseValue (value = this.value) {
      if (!/[-\/]/.test(value) && this.format !== 'yyyy') { //eslint-disable-line
        value = '1900-01-01 ' + value
      }
      let date = new Date(value.replace(/-/g, '/'))
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
      }
    },
    initial () {
      let parseDate = this.parseValue()
      let years = this.getYears()
      let months = this.getMonths()
      let dates = this.getDates()
      let hours = this.getHours()
      let minutes = this.getMinutes()
      let seconds = this.getSeconds()
      let pickers = []
      if (this.format.indexOf('yyyy') > -1) {
        pickers.push({
          options: years,
          value: String(parseDate.year),
          type: 'yyyy'
        })
      }
      if (this.format.indexOf('MM') > -1) {
        pickers.push({
          options: months,
          value: String(parseDate.month),
          type: 'MM'
        })
      }
      if (this.format.indexOf('dd') > -1) {
        pickers.push({
          options: dates,
          value: String(parseDate.date),
          type: 'dd'
        })
      }
      if (this.format.indexOf('HH') > -1) {
        pickers.push({
          options: hours,
          value: String(parseDate.hour),
          type: 'HH'
        })
      }
      if (this.format.indexOf('mm') > -1) {
        pickers.push({
          options: minutes,
          value: String(parseDate.minute),
          type: 'mm'
        })
      }
      if (this.format.indexOf('ss') > -1) {
        pickers.push({
          options: seconds,
          value: String(parseDate.second),
          type: 'ss'
        })
      }
      this.pickers = pickers
    },
    getYears () {
      let years = []
      let minYear = new Date(this.min).getFullYear()
      let maxYear = new Date(this.max).getFullYear()
      for (let i = minYear; i <= maxYear; i++) {
        years.push({
          label: i + this.locale.year,
          value: String(i)
        })
      }
      return years
    },
    getMonths () {
      let months = []
      for (let i = 1; i <= 12; i++) {
        months.push({
          label: (i < 10 ? '0' + String(i) : String(i)) + this.locale.month,
          value: String(i)
        })
      }
      return months
    },
    getDates () {
      let parseDate = this.parseValue()
      let year = parseDate.year
      let month = parseDate.month
      this.pickers.forEach((item) => {
        item.type === 'yyyy' && item.value && (year = parseInt(item.value))
        item.type === 'MM' && item.value && (month = parseInt(item.value))
      })
      let date = new Date(year, month, 0)
      let dates = []
      for (let i = 1; i <= date.getDate(); i++) {
        dates.push({
          label: (i < 10 ? '0' + String(i) : String(i)) + this.locale.date,
          value: String(i)
        })
      }
      return dates
    },
    getHours () {
      let hours = []
      for (let i = 0; i < 24; i++) {
        hours.push({
          label: (i < 10 ? '0' + String(i) : String(i)) + this.locale.hour,
          value: String(i)
        })
      }
      return hours
    },
    getMinutes () {
      let minutes = []
      for (let i = 0; i < 60; i++) {
        minutes.push({
          label: (i < 10 ? '0' + String(i) : String(i)) + this.locale.minute,
          value: String(i)
        })
      }
      return minutes
    },
    getSeconds () {
      let seconds = []
      for (let i = 0; i < 60; i++) {
        seconds.push({
          label: (i < 10 ? '0' + String(i) : String(i)) + this.locale.second,
          value: String(i)
        })
      }
      return seconds
    },
    handleCancel () {
      this.$emit('update:open', false).$emit('close')
    },
    handleClose () {
      this.$emit('update:open', false).$emit('close')
    },
    handleConfirm () {
      let value = this.format
      for (let item of this.pickers) {
        value = value.replace(item.type, item.value >= 10 ? item.value : '0' + item.value)
      }
      this.open && value !== this.value && this.$emit('update:open', false).$emit('input', value).$emit('change', value)
      value === this.value && this.handleClose()
    },
    handleChange (value, index, type) {
      this.pickers[index].value = value
      if (type === 'MM' || type === 'yyyy') {
        let dates = null
        this.pickers.forEach((item) => {
          if (item.type === type) {
            dates = this.getDates()
          }
          if (dates && item.type === 'dd') {
            let has = dates.some((o) => {
              return o.value === item.value
            })
            item.options = dates
            if (!has) {
              item.value = item.options[item.options.length - 1].value
            }
          }
        })
      }
    },
    handleToday () {
      let map = {
        'yyyy': () => {
          return new Date().getFullYear()
        },
        'MM': () => {
          return new Date().getMonth() + 1
        },
        'dd': () => {
          return new Date().getDate()
        },
        'hh': () => {
          return new Date().getHours()
        },
        'mm': () => {
          return new Date().getMinutes()
        },
        'ss': () => {
          return new Date().getSeconds()
        }
      }
      for (let item of this.pickers) {
        if (map[item.type]) {
          item.value = String(map[item.type]())
        }
      }
    }
  }
}
</script>
