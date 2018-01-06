<template>
  <i :class="classes">
    <slot></slot>
  </i>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  name: 'Icon',
  computed: {
    classes () {
      return [cssPrefix + 'iconfont']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
