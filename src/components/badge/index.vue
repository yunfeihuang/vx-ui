<template>
  <span :class="classes" v-html="myText"></span>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  computed: {
    classes () {
      return [cssPrefix + 'badge', this.text === '' ? cssPrefix + 'badge-dot' : '']
    },
    myText () {
      if (typeof this.text === 'number' && this.max) {
        if (this.text > this.max) {
          return this.ellipsis
        }
      }
      return this.text
    }
  },
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: Number,
      default: 9
    },
    ellipsis: {
      type: String,
      default: '<span class="badge-ellipsis">•••</span>'
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
