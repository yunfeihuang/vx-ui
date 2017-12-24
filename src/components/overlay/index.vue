<template>
  <div :class="classes" :style="styles" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    opacity: {
      type: Number,
      default: 0.35
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'overlay']
    },
    styles () {
      return 'opacity:' + this.opacity
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('click', e)
    }
  }
}
</script>

