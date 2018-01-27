<template>
  <div :class="classes" :disabled="disabled">
    <template v-for="item in options">
      <radio 
        :name="name"
        :disabled="item.disabled"
        :value="item.value"
        :checked="value===item.value"
        @on-change="handleChange"
        >
          {{item.label}}
      </radio>
      <divider v-if="divider"></divider>
    </template>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
import Radio from './Radio'
import Divider from '../divider'

export default {
  name: 'RadioGroup',
  mixins: [input],
  components: {
    Radio,
    Divider
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'radio-group']
    }
  },
  mounted () {
    this.value && this.updateLabel(this.value)
  },
  methods: {
    handleChange (value) {
      this.$emit('input', value).$emit('on-change', value)
      this.updateLabel(value)
    },
    updateLabel (value) {
      this.options && this.options.forEach(item => {
        value === item.value && this.$emit('update:label', item.label)
      })
    }
  }
}
</script>
