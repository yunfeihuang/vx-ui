<template>
  <div :class="classes" :disabled="disabled">
    <label :class="$cssPrefix + 'checker-item'" v-for="item in options">
      <input
        :type="checkedMaxItem === 1 ? 'radio' : 'checkbox'"
        :value="item.value"
        :checked="checkedMaxItem !== 1 ? value.indexOf(item.value) > -1 : value === item.value"
        :disabled="item.disabled"
        :name="name"
        @change="handleChange"
        />
      <span :disabled="item.disabled">{{item.label}}</span>
    </label>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'

export default {
  name: 'Checker',
  mixins: [input],
  props: {
    options: {
      type: Array,
      default: []
    },
    value: {
      type: [Array, String],
      default: []
    },
    checkedMaxItem: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'checker']
    }
  },
  mounted () {
    this.value && this.updateLabel(this.value)
  },
  methods: {
    handleChange (e) {
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
          this.$emit('input', value).$emit('on-change', value)
          this.updateLabel(value)
        }
      }
    },
    updateLabel (value) {
      let label = []
      this.options && this.options.forEach(item => {
        value.indexOf(item.value) > -1 && label.push(item.label)
      })
      this.$emit('update:label', this.checkedMaxItem !== 1 ? label : label[0])
    }
  }
}
</script>
