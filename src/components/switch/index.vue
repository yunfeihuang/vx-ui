<template>
  <div :class="classes">
    <input 
      :disabled="disabled" 
      :name="name" 
      :checked="value"
      type="checkbox"
      @change="changeHandler"
      />
    <button type="button"></button>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
export default {
  mixins: [input],
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'switch-wrapper']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (e) {
      let value = e.target.checked
      this.$emit('on-change', value).$emit('input', value)
    }
  }
}
</script>
