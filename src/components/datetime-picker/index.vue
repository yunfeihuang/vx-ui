<template>
  <vx-popup :open="open" :history="history" @close="handleClose" :fast-close="false">
    <template v-slot:header>
      <div :class="['vx-datetime-picker--header']">
        <button type="button" class="vx-datetime-picker--cancel" @click="handleClose">{{cancelText}}</button>
        <div :class="['vx-datetime-picker--today']">
          <!--
          <button type="button" class="vx-datetime-picker--today" @click="handleToday">{{todayText}}</button>
          -->
        </div>
        <button type="button" class="vx-datetime-picker--confirm" @click="handleConfirm">{{confirmText}}</button>
      </div>
    </template>
    <div :class="['vx-datetime-picker']">
      <vx-picker
        v-for="(item,index) in pickers"
        :class="['vx-datetime-picker--item']"
        :index="index+'-'+item.type"
        :key="index+'-'+item.type"
        :data-type="item.type"
        :modelValue="item.value"
        :placeholder="item.placeholder"
        :options="item.options"
        @update:modelValue="handleChange($event, index, item.type)"
      />
    </div>
  </vx-popup>
</template>

<script>
import VxPopup from '../popup'
import VxPicker from '../picker'

export default {
  name: 'VxDatetimePicker',
  components: {
    VxPopup,
    VxPicker
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
      default () {
        let now = new Date()
        return `${now.getFullYear() + 20}-01-01`
      }
    },
    modelValue: {
      type: String,
      default () {
        let now = new Date()
        return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}`
      }
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
  mounted () {
    this.open && this.initial()
  },
  watch: {
    open () {
      this.initial()
    }
  },
  data () {
    return {
      pickers: []
    }
  },
  methods: {
    parseValue (value = this.modelValue) {
      if (!value) {
        value = this.$options.props.modelValue.default()
      }
      if (!/[-\/]/.test(value) && this.format !== 'yyyy') { //eslint-disable-line
        value = '1900/01/0' + value
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
        item.type === 'yyyy' && item.value && (year = parseInt(item.value, 10))
        item.type === 'MM' && item.value && (month = parseInt(item.value, 10))
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
    handleClose () {
      this.$emit('update:open', false)
      this.$emit('close')
    },
    handleConfirm () {
      let value = this.format
      for (let item of this.pickers) {
        value = value.replace(item.type, item.value >= 10 ? item.value : '0' + item.value)
      }
      console.log('value', value)
      this.open && this.$emit('update:open', false)
      this.$emit('update:modelValue', value)
      this.handleClose()
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
