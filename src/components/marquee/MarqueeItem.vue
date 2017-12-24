<template>
  <div :class="classes" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  computed: {
    classes () {
      return [cssPrefix + 'marquee-item', 'swiper-slide']
    }
  },
  methods: {
    clickHandler (e) {
      this.emit('click', e)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
