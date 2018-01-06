<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  name: 'Divider',
  computed: {
    classes () {
      return [cssPrefix + 'divider']
    }
  }
}
</script>
