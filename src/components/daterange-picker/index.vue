<template>
  <popup :open="open" :history="history" @open="handleOpen" @close="handleClose" :fast-close="false" direction="top" :class="[$cssPrefix + 'daterange-picker-wrapper']">
    <div :class="classes" v-if="open">
      <div :class="[$cssPrefix + 'daterange-picker-header']">
        <tab :active.sync="tab" v-if="layout.length" ref="tab">
          <tab-item :name="0" v-show="layout.indexOf('date') > -1">日历</tab-item>
          <tab-item :name="1" v-show="layout.indexOf('week') > -1">周历</tab-item>
          <tab-item :name="2" v-show="layout.indexOf('month') > -1">月历</tab-item>
          <tab-item :name="3" v-show="layout.indexOf('quarter') > -1">季度</tab-item>
        </tab>
        <flexbox :class="[$cssPrefix + 'daterange-picker-controls']">
          <flexbox-item>
            <flexbox align="center">
              <button :disabled="date.getFullYear() <= 1990" type="button" @click="yearhandleChange(-1)">
                <icon>&#xe660;</icon>
              </button>
              <flexbox-item>{{date.getFullYear()}}年</flexbox-item>
              <button type="button" @click="yearhandleChange(1)">
                <icon>&#xe65f;</icon>
              </button>
            </flexbox>
          </flexbox-item>
          <flexbox-item v-if="tab==0||tab==1">
            <flexbox align="center">
              <button :disabled="date.getMonth() === 0" type="button" @click="monthhandleChange(-1)">
                <icon>&#xe660;</icon>
              </button>
              <flexbox-item>{{date.getMonth() + 1}}月</flexbox-item>
              <button :disabled="date.getMonth() === 11" type="button" @click="monthhandleChange(1)">
                <icon>&#xe65f;</icon>
              </button>
            </flexbox>
          </flexbox-item>
        </flexbox>
        <divider></divider>
      </div>
      <div :class="[$cssPrefix + 'daterange-picker-body']">
        <flexbox v-if="tab==0||tab==1" :class="[$cssPrefix + 'daterange-picker-week-title']">
          <flexbox-item v-for="(item, i) in weekText" :key="i" :class="[ i > 4 ? $cssPrefix + 'daterange-picker-weekend' : '']">{{item}}</flexbox-item>
        </flexbox>
        <divider v-if="tab==0||tab==1" style="margin-top:-1px;"></divider>
        <flexbox :class="[$cssPrefix + 'daterange-picker-calendar' ,'divider']" v-if="tab==0||tab==1">
          <div
            v-if="tab===0"
            v-for="item in dateList"
            :key="item.value.getTime()"
            :class="calendarClasses(item)"
            @click="handleChange(item.value)"
            >
            {{item.value.getDate()}}
          </div>
          <div
            v-if="tab===1"
            v-for="(item,i) in dateList"
            :key="item.value.getTime()"
            :class="calendarClasses(item)"
            @click="handleChange([dateList[Math.floor(i/7)*7].value,dateList[(Math.floor(i/7)+1)*7-1].value])"
            >
            {{item.value.getDate()}}
          </div>
        </flexbox>
        <flexbox :class="[$cssPrefix + 'daterange-picker-calendar']" v-else-if="tab===2" :style="{height: '6.8rem'}" align="center">
          <div
            v-if="tab===2"
            v-for="(item, i) in monthList"
            :key="i"
            :class="calendarClasses(item)"
            @click="handleChange([item.startDate,item.endDate])"
            >
            {{i+1}}月
          </div>
        </flexbox>
        <flexbox :class="[$cssPrefix + 'daterange-picker-calendar']" v-else-if="tab===3">
          <div
            v-if="tab===3"
            v-for="(item,i) in quarterList"
            :key="i"
            :class="calendarClasses(item)"
            @click="handleChange([item.startDate,item.endDate])"
            >
            {{i+1}}季度
          </div>
        </flexbox>
      </div>
      <divider></divider>
      <flexbox :class="[$cssPrefix + 'daterange-picker-footer']">
        <button type="button" :class="[$cssPrefix + 'daterange-picker-cancel']" @click="handleClose">{{cancelText}}</button>
        <flexbox-item>
          <button type="button" :class="[$cssPrefix + 'daterange-picker-clear']" @click="handleChange([])">{{clearText}}</button>
        </flexbox-item>
        <button type="button" :class="[$cssPrefix + 'daterange-picker-confirm']" @click="handleConfirm">{{confirmText}}</button>
      </flexbox>
    </div>
  </popup>
</template>

<script>
import Popup from '../popup'
import {Flexbox, FlexboxItem} from '../flexbox'
import {Tab, TabItem} from '../tab'
import Divider from '../divider'
import Icon from '../icon'

let now = new Date()

export default {
  componentName: 'DateRangePicker',
  components: {
    Popup,
    Divider,
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    Icon
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
      type: Array,
      default () {
        return []
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
      default: '确定'
    },
    clearText: {
      type: String,
      default: '清空'
    },
    weekText: {
      type: Array,
      default () {
        return ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    },
    layout: {
      type: Array,
      default () {
        return ['date', 'week', 'month', 'quarter']
      }
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'daterange-picker']
    },
    dateList () {
      return this.getCalendarItems()
    },
    monthList () {
      let result = []
      for (let i = 0; i < 12; i++) {
        let startDate = new Date(this.date.getFullYear(), i, 1)
        let endDate = this.getLastDate(this.date.getFullYear(), i)
        let active = false
        if (this.myValue && this.myValue[0] && this.myValue[1] && this.valueTab === 2 && startDate.getTime() === this.myValue[0].getTime() && endDate.getTime() === this.myValue[1].getTime()) {
          active = 'active'
        }
        result.push({
          startDate,
          endDate,
          active
        })
      }
      return result
    },
    quarterList () {
      let result = []
      for (let i = 0; i < 4; i++) {
        let startDate = new Date(this.date.getFullYear(), i * 3, 1)
        let endDate = this.getLastDate(this.date.getFullYear(), i * 3 + 2)
        let active = false
        if (this.myValue && this.myValue[0] && this.myValue[1] && this.valueTab === 3 && startDate.getTime() === this.myValue[0].getTime() && endDate.getTime() === this.myValue[1].getTime()) {
          active = true
        }
        result.push({
          startDate,
          endDate,
          active
        })
      }
      return result
    }
  },
  data () {
    return {
      myValue: this.value,
      valueTab: 0,
      tab: 0,
      date: new Date(),
      datetimes: 1000 * 60 * 60 * 24
    }
  },
  methods: {
    calendarClasses (item) {
      let array = []
      if (this.tab === 0) {
        array.push(this.$cssPrefix + 'daterange-picker-calendar-item')
        item.weekend && array.push(this.$cssPrefix + 'daterange-picker-weekend')
        item.today && array.push(this.$cssPrefix + 'daterange-picker-today')
        !item.currentMonth && array.push(this.$cssPrefix + 'daterange-picker-outmonth')
        if (this.valueTab === 0) {
          item.start && array.push(this.$cssPrefix + 'daterange-picker-start')
          item.end && array.push(this.$cssPrefix + 'daterange-picker-end')
          item.active && array.push(this.$cssPrefix + 'daterange-picker-item-active')
        }
      } else if (this.tab === 1) {
        array.push(this.$cssPrefix + 'daterange-picker-calendar-item')
        item.weekend && array.push(this.$cssPrefix + 'daterange-picker-weekend')
        item.today && array.push(this.$cssPrefix + 'daterange-picker-today')
        !item.currentMonth && array.push(this.$cssPrefix + 'daterange-picker-outmonth')
        if (this.valueTab === 1) {
          item.start && array.push(this.$cssPrefix + 'daterange-picker-start')
          item.end && array.push(this.$cssPrefix + 'daterange-picker-end')
          item.active && array.push(this.$cssPrefix + 'daterange-picker-item-active')
        }
      } else if (this.tab === 2) {
        array = [this.$cssPrefix + 'daterange-picker-calendar-month']
        item.active && array.push(this.$cssPrefix + 'daterange-picker-active')
      } else if (this.tab === 3) {
        array = [this.$cssPrefix + 'daterange-picker-calendar-quarter']
        item.active && array.push(this.$cssPrefix + 'daterange-picker-active')
      }
      return array
    },
    getLastDate (year, month) {
      if (month === 11) {
        year++
        month = 0
      } else {
        month++
      }
      return new Date(year, month, 0)
    },
    getToDay () {
      let date = new Date()
      return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    },
    getDateCalendarStatus (date) {
      return {
        start: this.myValue && this.myValue[0] && this.myValue[0].getTime() === date.getTime() ? true : false, //eslint-disable-line
        end: this.myValue && this.myValue[1] && this.myValue[1].getTime() === date.getTime() ? true : false, //eslint-disable-line
        active: this.myValue && this.myValue[0] && this.myValue && this.myValue[1] && date.getTime() > this.myValue[0].getTime() && date.getTime() < this.myValue[1].getTime() ? true : false //eslint-disable-line
      }
    },
    getCalendarItems () {
      let result = []
      let year = this.date.getFullYear()
      let month = this.date.getMonth()
      let lastMonthDate = this.getLastDate(year, month)
      let firstMonthDate = new Date(year, month, 1)
      let day = firstMonthDate.getDay() || 7
      let today = this.getToDay()
      if (day !== 1) {
        for (let i = 1; i < day; i++) {
          let date = new Date(firstMonthDate.getTime() - this.datetimes * i)
          result.unshift({
            ...this.getDateCalendarStatus(date),
            today: date.getTime() === today.getTime(),
            currentMonth: false,
            value: date,
            weekend: [0, 6].indexOf(date.getDay()) > -1
          })
        }
      }
      for (let i = 1; i <= lastMonthDate.getDate(); i++) {
        let date = new Date(year, month, i)
        result.push({
          ...this.getDateCalendarStatus(date),
          today: date.getTime() === today.getTime(),
          currentMonth: true,
          value: date,
          weekend: [0, 6].indexOf(date.getDay()) > -1
        })
      }
      if (lastMonthDate.getDay() !== 0) {
        for (let i = 1; i <= 7 - lastMonthDate.getDay(); i++) {
          let date = new Date(lastMonthDate.getTime() + this.datetimes * i)
          result.push({
            ...this.getDateCalendarStatus(date),
            today: date.getTime() === today.getTime(),
            currentMonth: false,
            value: date,
            weekend: [0, 6].indexOf(date.getDay()) > -1
          })
        }
      }
      return result
    },
    setValue (value) {
      this.valueTab = this.tab
      this.myValue = value
    },
    yearhandleChange (i) {
      let date = new Date(this.date.getTime())
      date.setFullYear(date.getFullYear() + i)
      this.date = date
    },
    monthhandleChange (i) {
      let date = new Date(this.date.getTime())
      date.setMonth(date.getMonth() + i)
      this.date = date
    },
    handleClose () {
      this.$emit('close')
    },
    handleConfirm () {
      this.$emit('change', this.myValue).$emit('input', this.myValue)
      this.handleClose()
    },
    handleChange (value) {
      if (value instanceof Array) {
        this.setValue(value)
      } else {
        if ((!this.myValue[0] && !this.myValue[1]) || (this.myValue[0] && this.myValue[1])) {
          if (this.tab === 0) {
            this.valueTab = 0
          }
          this.myValue = [value]
        } else {
          this.myValue = this.myValue[0] > value ? [] : [this.myValue[0], value]
        }
      }
    },
    handleOpen () {
      this.$refs.tab.computedStyle()
    }
  }
}
</script>
