<template>
  <div :class="classes" :disabled="disabled">
    <template v-for="item in options">
      <checkbox 
        :type="checkedMaxItem === 1 ? 'radio' : 'checkbox'"
        :name="name"
        :disabled="item.disabled"
        :value="item.value"
        :checked="value.indexOf(item.value)>-1"
        :direction="direction"
        @on-change="changeHandler"
        >
        {{item.label}}
      </checkbox>
      <divider v-if="divider"></divider>
    </template>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
import Checkbox from './Checkbox'
import Divider from '../divider'

export default {
  name: 'CheckboxGroup',
  mixins: [input],
  components: {
    Checkbox,
    Divider
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    value: {
      type: Array,
      default: []
    },
    divider: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String,
      default: 'normal'
    },
    checkedMaxItem: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'checkbox-group']
    }
  },
  mounted () {
    this.value && this.updateLabel(this.value)
  },
  methods: {
    changeHandler (e) {
      if (this.checkedMaxItem === 1) {
        this.$emit('on-change', e.target.value).$emit('input', e.target.value)
        this.updateLabel(e.target.value)
      } else {
        if (e.target.checked && this.checkedMaxItem !== 0 && this.value.length === this.checkedMaxItem) {
          e.target.checked = false
          window.$toast({content: `选择项不得超过${this.checkedMaxItem}个`})
        } else {
          let value = Object.assign([], this.value)
          if (e.target.checked) {
            value.indexOf(e.target.value) === -1 && value.push(e.target.value)
          } else {
            value.splice(value.indexOf(e.target.value), 1)
          }
          this.$emit('on-change', value).$emit('input', value)
          this.updateLabel(value)
        }
      }
    },
    updateLabel (value) {
      let label = []
      this.options && this.options.forEach(item => {
        value.indexOf(item.value) > -1 && label.push(item.label)
      })
      this.$emit('update:label', label)
    }
  }
}
</script>

