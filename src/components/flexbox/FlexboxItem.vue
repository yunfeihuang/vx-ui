<template>
  <div :class="classes" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    span: {
      type: Number,
      default: 1
    }
  },
  computed: {
    classes () {
      return [this.span > 1 ? 'flexbox-item flexbox-item' + this.span : 'flexbox-item']
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('click', e)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
