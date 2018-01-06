<template>
  <div :class="classes" @click="clickHandler">
    <div :class="[cssPrefix+'sticky-inner']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import sticky from './sticky'
export default {
  name: 'Sticky',
  props: {
    scrollBox: {
      type: String
    },
    offset: {
      type: Number,
      default: 0
    },
    checkStickySupport: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'sticky-box']
    }
  },
  mounted () {
    sticky(this.$el.children[0], {
      scrollBox: this.scrollBox,
      offset: this.offset,
      checkStickySupport: this.checkStickySupport
    })
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
