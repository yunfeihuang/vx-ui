<template>
  <flexbox :class="classes" align="center" justify="center" @click.native="clickHandler">
    <div :class="$cssPrefix + 'cell-hd'">
      <slot name="icon"></slot>
    </div>
    <flexbox-item :class="$cssPrefix + 'cell-bd'">
      <slot name="title"></slot>
    </flexbox-item>
    <div :class="$cssPrefix + 'cell-ft'">
      <slot name="value"></slot>
    </div>
  </flexbox>
</template>

<script>
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
  name: 'Cell',
  components: {
    Flexbox,
    FlexboxItem
  },
  props: {
    arrow: {
      type: Boolean,
      default: true
    },
    href: {
      type: String
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'cell', this.arrow ? this.$cssPrefix + 'cell-access' : '']
    }
  },
  methods: {
    clickHandler (e) {
      if (this.href) {
        location.href = this.href
      }
    }
  }
}
</script>
