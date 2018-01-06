<template>
  <div :class="classes" :disabled="disabled">
    <label :class="$cssPrefix + 'checker-item'" v-for="item in options">
      <input
        :type="type"
        :value="item.value"
        :checked="type === 'checkbox' ? value.indexOf(item.value) > -1 : value === item.value"
        :disabled="item.disabled"
        :name="name"
        @change="changeHandler"
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
    type: {
      type: String,
      default: 'checkbox'
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
    changeHandler (e) {
      if (this.type === 'checkbox') {
        let value = Object.assign([], this.value)
        if (e.target.checked) {
          value.indexOf(e.target.value) === -1 && value.push(e.target.value)
        } else {
          value.splice(value.indexOf(e.target.value), 1)
        }
        this.$emit('on-change', value).$emit('input', value)
        this.updateLabel(value)
      } else {
        this.$emit('on-change', e.target.value).$emit('input', e.target.value)
        this.updateLabel(e.target.value)
      }
    },
    updateLabel (value) {
      let label = []
      this.options && this.options.forEach(item => {
        value.indexOf(item.value) > -1 && label.push(item.label)
      })
      this.$emit('update:label', this.type === 'checkbox' ? label : label[0])
    }
  }
}
</script>
