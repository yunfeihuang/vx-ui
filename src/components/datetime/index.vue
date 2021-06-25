<template>
  <vx-input
    v-bind="$props"
    v-on="$attrs"
    :type="nativeType"
    arrow
    readonly="readonly"
    v-model="modelValue"
    @focusin="handleFocusIn"
    @update:modelValue="handleChange"
    >
    <template v-slot:prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </vx-input>
  <teleport to="body">
    <vx-popup
      v-model:open="open"
      @close="open = false">
      <vx-picker
        :modelValue="pickerValue"
        :columns="columns"
        @cancel="open = false"
        @change="handleChange"
        @confirm="handleConfirm"
      />
    </vx-popup>
  </teleport>
</template>

<script>
import { input } from '@/utils/mixins'
import VxInput from '../input'
import VxPopup from '../popup'
import VxPicker from '../picker'
import { ref, watch, computed } from 'vue'
export default {
  name: 'VxDatetime',
  components: {
    VxInput,
    VxPopup,
    VxPicker
  },
  props: {
    ...input.props,
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    min: {
      type: String,
      default: '1900/1/1 00:00:00'
    },
    max: {
      type: String,
      default () {
        let now = new Date()
        return `${now.getFullYear() + 20}/1/1 00:00:00`
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    getPopupMounted: {
      type: Function
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
    }
  },
  setup (props, { emit }) {
    const formatMethods= {
      'yyyy': 'FullYear',
      'MM': 'Month',
      'dd': 'Date',
      'HH': 'Hours',
      'mm': 'Minutes',
      'ss': 'Seconds'
    }
    const columns = ref([])
    const currentDate = ref(props.modelValue && props.modelValue.indexOf('yyyy-') > -1 ? new Date(props.modelValue) : new Date())
    const pickerValue = computed(() => {
      let result = []
      props.format.split(/\/|-|\s|:/).forEach(item => {
        result.push(currentDate.value['get' + formatMethods[item]]())
      })
      return result
    })
    watch(() => props.modelValue, val => {
      pickerValue.value = val
    })
    const open = ref(false)
    let minDate = new Date(props.min)
    let maxDate = new Date(props.max)
    const getYears = () => {
      let result = []
      for(let i = minDate.getFullYear(); i <= maxDate.getFullYear(); i++) {
        result.push(i)
      }
      return result
    }
    const getYearsColumn = () => {
      return getYears().map(item => {
        return {
          label: item + props.locale.year,
          value: item
        }
      })
    }
    const getMonths = (year) => {
      let result = []
      for (let i = 0; i < 12; i++) {
        let time = new Date(`${year}/${i}/1 00:00:00`)
        if (time > minDate.getTime() && time < maxDate.getTime()) {
          result.push(i)
        }
      }
      return result
    }
    const getMonthsColumn = year => {
      return getMonths(year).map(item => {
        return {
          label: (item + 1).toString().padStart(2, '0') + props.locale.month,
          value: item
        }
      })
    }
    const getDates = (year, month) => {
      let result = []
      for (let i = 1; i <= new Date(year, month + 1, 0).getDate(); i++) {
        let time = new Date(`${year}/${month}/${i} 00:00:00`)
        if (time > minDate.getTime() && time < maxDate.getTime()) {
          result.push(i)
        }
      }
      return result
    }
    const getDatesColumn = (year, month) => {
      return getDates(year, month).map(item => {
        return {
          label: item.toString().padStart(2, '0') + props.locale.date,
          value: item
        }
      })
    }
    const getHours = () => {
      let result = []
      for (let i = 0; i < 24; i++) {
        result.push(i)
      }
      return result
    }
    const getHoursColumn = () => {
      return getHours().map(item => {
        return {
          label: item.toString().padStart(2, '0') + props.locale.hour,
          value: item
        }
      })
    }
    const getMinutes = () => {
      let result = []
      for (let i = 0; i < 60; i++) {
        result.push(i)
      }
      return result
    }
    const getMinutesColumn = () => {
      return getMinutes().map(item => {
        return {
          label: item.toString().padStart(2, '0') + props.locale.minute,
          value: item
        }
      })
    }
    const getSeconds = () => {
      let result = []
      for (let i = 0; i < 60; i++) {
        result.push(i)
      }
      return result
    }
    const getSecondsColumn = () => {
      return getSeconds().map(item => {
        return {
          label: item.toString().padStart(2, '0') + props.locale.second,
          value: item
        }
      })
    }

    return {
      pickerValue,
      open,
      columns,
      handleFocusIn () {
        let _columns = []
        props.format.split(/\/|-|\s|:/).forEach(item => {
          if (item === 'yyyy') {
            _columns.push(getYearsColumn())
          } else if (item === 'MM') {
            _columns.push(getMonthsColumn(currentDate.value.getFullYear()))
          } else if (item === 'dd') {
            _columns.push(getDatesColumn(currentDate.value.getFullYear(), currentDate.value.getMonth()))
          } else if (item === 'HH') {
            _columns.push(getHoursColumn())
          } else if (item === 'mm') {
            _columns.push(getMinutesColumn())
          } else if (item === 'ss') {
            _columns.push(getSecondsColumn())
          }
        })
        columns.value = _columns
        open.value = true
      },
      handleConfirm () {
        emit('update:modelValue', currentDate.value.format(props.format))
        open.value = false
      },
      handleChange (e) {
        let keys = props.format.split(/\/|-|\s|:/)
        if (formatMethods[keys[e.index]]) {
          let date = new Date(currentDate.value.getTime())
          date['set' + formatMethods[keys[e.index]]](e.value)
          console.log(e, date.toLocaleString())
          currentDate.value = date
        }
        if (keys[e.index] === 'MM') {
          let date = currentDate.value.getDate()
          let _columns = [...columns.value]
          _columns[e.index + 1] = getDatesColumn(currentDate.value.getFullYear(), e.value)
          columns.value = _columns
          if (getDates().includes(date) === -1) {
            date = new Date(currentDate.value.getTime())
            date.setDate(1)
            currentDate.value = date
          }
        }
      }
    }
  }
}
</script>

