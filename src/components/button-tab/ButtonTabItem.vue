<template>
  <div :class="classes" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  methods: {
    clickHandler (e) {
      this.$emit('on-change', this.index)
      this.$emit('click', e)
    }
  },
  computed: {
    classes () {
      let array = ['flexbox-item', cssPrefix + 'button-tab-item']
      if (this.active) {
        array.push(cssPrefix + 'button-tab-item-active')
        array.push(this.$parent.activeClass)
      }
      return array
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      active: false
    }
  }
}
</script>
