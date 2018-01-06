<template>
  <div :class="classes">
    <flexbox :class="[$cssPrefix + 'layout-flexbox']" direction="column">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </flexbox>
    <slot></slot>
  </div>
</template>

<script>
import {Flexbox} from '../flexbox'
export default {
  name: 'Layout',
  components: {
    Flexbox
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'layout']
    }
  }
}
</script>
