<template>
  <div class="vx-calendar-range">
    <div class="vx-calendar-range--header">
      <tab v-model:active="tabActive" v-if="layout.length" ref="tab" :underline-width="10">
        <tab-item :name="0" v-show="layout.indexOf('date') > -1">{{tabText['date']}}</tab-item>
        <tab-item :name="1" v-show="layout.indexOf('week') > -1">{{tabText['week']}}</tab-item>
        <tab-item :name="2" v-show="layout.indexOf('month') > -1">{{tabText['month']}}</tab-item>
        <tab-item :name="3" v-show="layout.indexOf('quarter') > -1">{{tabText['quarter']}}</tab-item>
      </tab>
    </div>
    <div class="vx-calendar-range--body">
      <calendar
        v-if="tabActive==0"
        is-range
        :value="0 == valueTab ? myValue : []"
        :weekText="weekText"
        :yearText="yearText"
        :monthText="monthText"
        :lang="lang"
        @change="handleChange"/>
      <calendar
        v-if="tabActive==1"
        is-range
        is-week-range
        :value="1 == valueTab ? myValue : []"
        :weekText="weekText"
        :yearText="yearText"
        :monthText="monthText"
        :lang="lang"
        @change="handleChange"/>
      <calendar
        v-if="tabActive==2 || tabActive==3"
        v-model="myValue"
        :lang="lang"
        @date-change="handleDateChange"
        :layout="['year']"/>
      <div v-if="tabActive===2" class="vx-calendar-range--pane">
        <div
          v-for="(item, i) in monthList"
          :key="i"
          :class="calendarClasses(item)"
          @click="handleChange([item.startDate,item.endDate])"
          >
          {{i+1}}
        </div>
      </div>
      <div v-if="tabActive===3" class="vx-calendar-range--pane">
        <div
          v-for="(item,i) in quarterList"
          :key="i"
          :class="calendarClasses(item)"
          @click="handleChange([item.startDate,item.endDate])"
          >
          {{i+1}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Tab, TabItem} from '../tab'
import Calendar from '../calendar'

export default {
  name: 'VxCalendarRange',
  components: {
    Tab,
    TabItem,
    Calendar
  },
  props: {
    modelValue: {
      type: Array,
      default () {
        return []
      }
    },
    ...Calendar.props,
    tabText: {
      type: Object,
      default () {
        return {
          date: '日历',
          week: '周历',
          month: '月历',
          quarter: '季度'
        }
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
    monthList () {
      let result = []
      for (let i = 0; i < 12; i++) {
        let startDate = new Date(this.date.getFullYear(), i, 1)
        let endDate = this.getLastDate(this.date.getFullYear(), i)
        let active = false
        if (this.myValue && this.myValue[0] && this.myValue[1] && this.valueTab === 2 && startDate.getTime() === this.myValue[0].getTime() && endDate.getTime() === this.myValue[1].getTime()) {
          active = true
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
      myValue: this.modelValue,
      valueTab: 0,
      tabActive: 0,
      date: this.getYMD(),
      datetimes: 1000 * 60 * 60 * 24
    }
  },
  watch: {
    value (value) {
      this.myValue = value
    }
  },
  methods: {
    getYMD (date = new Date()) { // 获取日期对象，没有时分秒的
      return new Date(date.getFullYear(), date.getMonth(), date.getDate())
    },
    calendarClasses (item) {
      let array = []
      if (this.tabActive === 2) {
        array = ['vx-calendar-range--month']
        item.active && array.push('is-active')
      } else if (this.tabActive === 3) {
        array = ['vx-calendar-range--quarter']
        item.active && array.push('is-active')
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
    setValue (value) {
      this.valueTab = this.tabActive
      this.myValue = value
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
    },
    handleYearChange (i) {
      let date = new Date(this.date.getTime())
      date.setFullYear(date.getFullYear() + i)
      this.date = date
    },
    handleMonthChange (i) {
      let date = new Date(this.date.getTime())
      date.setMonth(date.getMonth() + i)
      this.date = date
    },
    handleChange (value) {
      this.setValue(value)
    },
    handleDateChange (value) {
      let date = new Date(this.date.getTime())
      date.setFullYear(value.getFullYear())
      this.date = date
    }
  }
}
</script>
