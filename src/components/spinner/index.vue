<template>
  <div :class="classes">
    <div :class="cssPrefix + 'spinner'"></div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  props: {
    color: {
      type: String
    },
    primaryColor: {
      type: String
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'spinner-wrapper']
    }
  },
  mounted () {
    if (this.color) {
      this.$el.children[0].style.borderColor = this.color
    }
    if (this.primaryColor) {
      this.$el.children[0].style.borderTopColor = this.primaryColor
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
