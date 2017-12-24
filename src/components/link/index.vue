<template>
  <router-link :class="classes" :to="href">
    <slot></slot>
  </router-link>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  computed: {
    classes () {
      return [cssPrefix + 'link', this.active ? cssPrefix + 'link-active' : '']
    }
  },
  props: {
    href: {
      type: [String, Object]
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
