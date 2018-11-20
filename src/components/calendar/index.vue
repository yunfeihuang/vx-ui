<template>
  <div class="vx-calendar--wrapper">
    <div class="vx-calendar--header">
      <flexbox class="vx-calendar--controls" v-if="layout.indexOf('year')>-1||layout.indexOf('month')>-1">
        <flexbox-item v-if="layout.indexOf('year')>-1">
          <flexbox align="center">
            <button :class="{'is-disabled': date.getFullYear() <= 1990}" type="button" @click="handleYearChange(-1)">
              <arrow direction="left" size="0.22rem"/>
            </button>
            <flexbox-item>
              {{date.getFullYear()}}{{yearText[lang]}}
              <input type="number" :value="date.getFullYear()" :min="1990" :max="date.getFullYear()+100" @change="handleYearChange2"/>
            </flexbox-item>
            <button type="button" @click="handleYearChange(1)">
              <arrow size="0.22rem"/>
            </button>
          </flexbox>
        </flexbox-item>
        <flexbox-item v-if="layout.indexOf('month')>-1">
          <flexbox align="center">
            <button :class="{'is-disabled': date.getMonth() === 0}" type="button" @click="handleMonthChange(-1)">
              <arrow direction="left" size="0.22rem"/>
            </button>
            <flexbox-item>
              {{date.getMonth() + 1}}{{monthText[lang]}}
              <input type="number" :value="date.getMonth() + 1" :min="1" max="12"  @change="handleMonthChange2"/>
            </flexbox-item>
            <button :class="{'is-disabled': date.getMonth() === 11}" type="button" @click="handleMonthChange(1)">
              <arrow size="0.22rem"/>
            </button>
          </flexbox>
        </flexbox-item>
      </flexbox>
      <flexbox v-if="layout.indexOf('week')>-1">
        <flexbox-item v-for="(item, i) in myWeekText" :key="i" :class="[ (lang == 'ZH' ? i == 5 : i == 0) || i == 6  ? 'is-weekend' : '']">{{item}}</flexbox-item>
      </flexbox>
    </div>
    <flexbox class="vx-calendar"  v-if="layout.indexOf('date')>-1">
      <div
        v-for="(item, index) in dateList"
        :key="item.value.getTime()"
        :class="calendarClasses(item)"
        @click="handleChange(isWeekRange? index : item.value)"
        >
        <slot v-if="$slots.default" v-bind="item"></slot>
        <span v-else class="vx-calendar--date-text">{{item.value.getDate()}}</span>
      </div>
    </flexbox>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem} from '../flexbox'
import Arrow from '../arrow'

export default {
  componentName: 'Calendar',
  components: {
    Flexbox,
    FlexboxItem,
    Arrow
  },
  props: {
    value: {
      type: [Date, Array, String]
    },
    weekText: {
      type: Object,
      default () {
        return {
          EN: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Satur'],
          ZH: ['一', '二', '三', '四', '五', '六', '日']
        }
      }
    },
    yearText: {
      type: Object,
      default () {
        return {
          EN: ' Year',
          ZH: '年'
        }
      }
    },
    monthText: {
      type: Object,
      default () {
        return {
          EN: ' Month',
          ZH: '月'
        }
      }
    },
    isRange: {
      type: Boolean,
      default: false
    },
    layout: {
      type: Array,
      default () {
        return ['year', 'month', 'week', 'date']
      }
    },
    lang: {
      type: String,
      default: 'ZH'
    },
    isWeekRange: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    myWeekText () {
      return this.weekText[this.lang]
    },
    dateList () {
      return this.getCalendarItems()
    }
  },
  watch: {
    value (value) {
      this.myValue = value
    }
  },
  data () {
    let date = this.getYMD()
    if (this.isRange) {
      if (this.value && this.value[0]) {
        date = this.getYMD(this.value[0] || this.value[1])
      }
    } else {
      date = this.value ? this.getYMD(this.value) : this.getYMD()
    }
    return {
      myValue: this.value,
      date,
      datetimes: 1000 * 60 * 60 * 24
    }
  },
  methods: {
    handleYearChange (i) {
      let date = new Date(this.date.getTime())
      date.setFullYear(date.getFullYear() + i)
      this.date = date
      this.$emit('date-change', date)
    },
    handleYearChange2 (e) {
      let date = new Date(this.date.getTime())
      date.setFullYear(Number(e.target.value))
      this.date = date
      this.$emit('date-change', date)
    },
    handleMonthChange (i) {
      let date = new Date(this.date.getTime())
      date.setMonth(date.getMonth() + i)
      this.date = date
      this.$emit('date-change', date)
    },
    handleMonthChange2 (e) {
      let date = new Date(this.date.getTime())
      date.setMonth(Number(e.target.value) - 1)
      this.date = date
      this.$emit('date-change', date)
    },
    calendarClasses (item) {
      let array = []
      array.push('vx-calendar--date')
      item.weekend && array.push('is-weekend')
      item.today && array.push('is-today')
      !item.currentMonth && array.push('is-disabled')
      if (this.isRange) {
        item.start && array.push('is-start')
        item.end && array.push('is-end')
        item.active && array.push('is-active')
      } else {
        item.active && array.push('is-start')
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
    getYMD (date = new Date()) { // 获取日期对象，没有时分秒的
      return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    },
    getDateCalendarStatus (date) {
      if (this.isRange) {
        return {
          start: this.myValue && this.myValue[0] && this.myValue[0].getTime() === date.getTime() ? true : false, //eslint-disable-line
          end: this.myValue && this.myValue[1] && this.myValue[1].getTime() === date.getTime() ? true : false, //eslint-disable-line
          active: this.myValue && this.myValue[0] && this.myValue && this.myValue[1] && date.getTime() > this.myValue[0].getTime() && date.getTime() < this.myValue[1].getTime() ? true : false //eslint-disable-line
        }
      } else {
        return {
          active: this.myValue && this.getYMD(this.myValue).getTime() === date.getTime()
        }
      }
    },
    getCalendarItems () {
      let result = []
      let year = this.date.getFullYear()
      let month = this.date.getMonth()
      let lastMonthDate = this.getLastDate(year, month)
      let firstMonthDate = new Date(year, month, 1)
      let day = firstMonthDate.getDay()
      let today = this.getYMD()
      let weekDayStart = this.lang === 'ZH' ? 1 : 0
      let weekDayEnd = this.lang === 'ZH' ? 0 : 6
      if (day !== weekDayStart) {
        for (let i = 1; i < 7; i++) {
          let date = new Date(firstMonthDate.getTime() - this.datetimes * i)
          result.unshift({
            ...this.getDateCalendarStatus(date),
            today: date.getTime() === today.getTime(),
            currentMonth: false,
            value: date,
            weekend: [0, 6].indexOf(date.getDay()) > -1
          })
          if (date.getDay() === weekDayStart) {
            break
          }
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
      if (result[result.length - 1].value.getDay() !== weekDayEnd) {
        for (let i = 1; i <= 7; i++) {
          let date = new Date(lastMonthDate.getTime() + this.datetimes * i)
          result.push({
            ...this.getDateCalendarStatus(date),
            today: date.getTime() === today.getTime(),
            currentMonth: false,
            value: date,
            weekend: [0, 6].indexOf(date.getDay()) > -1
          })
          if (date.getDay() === weekDayEnd) {
            break
          }
        }
      }
      return result
    },
    setValue (value) {
      this.myValue = value
      this.$emit('input', value).$emit('change', value)
    },
    handleChange (value) {
      if (this.isRange) {
        if (this.isWeekRange) {
          this.setValue([this.dateList[Math.floor(value / 7) * 7].value, this.dateList[(Math.floor(value / 7) + 1) * 7 - 1].value])
        } else {
          if (value instanceof Array) {
            this.setValue(value)
          } else {
            if ((!this.myValue[0] && !this.myValue[1]) || (this.myValue[0] && this.myValue[1])) {
              this.myValue = [value]
            } else {
              this.myValue = this.myValue[0] > value ? [] : [this.myValue[0], value]
            }
            if (this.myValue.length === 2) {
              this.setValue(this.myValue)
            }
          }
        }
      } else {
        this.setValue(value)
      }
    }
  }
}
</script>
