<template>
  <div :class="classes" @click="clickHandler">
    <span v-if="$parent.underlineWidth" :class="[cssPrefix + 'tab-item-text']">
      <slot></slot>
    </span>
    <slot v-else></slot>
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
      let array = ['flexbox-item', cssPrefix + 'tab-item']
      if (this.active) {
        array.push(cssPrefix + 'tab-item-active')
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
