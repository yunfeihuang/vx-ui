<template>
  <flexbox-item :class="classes">
    <slot></slot>
  </flexbox-item>
</template>

<script>
import {FlexboxItem} from 'src/components/flexbox'
export default {
  name: 'XBody',
  components: {
    FlexboxItem
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'body', this.scroll ? 'scrollbox' : '']
    }
  },
  props: {
    scroll: {
      type: Boolean,
      default: true
    }
  }
}
</script>
