<template>
  <div :class="classes">
    <input
      :disabled="disabled"
      :name="name"
      :checked="onValue == value"
      type="checkbox"
      @change="handleChange"
      />
    <button type="button"></button>
    <span v-if="onText" :class="$cssPrefix + 'switch-text'">{{onText}}</span>
    <span v-if="offText" :class="$cssPrefix + 'switch-text'">{{offText}}</span>
  </div>
</template>

<script>
import { input } from 'utils/mixins.js'
export default {
  componentName: 'XSwitch',
  mixins: [input],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    onValue: {
      default: true
    },
    offValue: {
      default: false
    },
    onText: {
      default: ''
    },
    offText: {
      default: ''
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'switch-wrapper']
    }
  },
  methods: {
    handleChange (e) {
      let value = e.target.checked ? this.onValue : this.offValue
      this.$emit('input', value).$emit('change', value)
    }
  }
}
</script>
