<template>
  <flexbox :class="classes" align="center" justify="center" @click.native="handleClick">
    <div :class="$cssPrefix + 'cell-hd'">
      <slot name="icon"></slot>
    </div>
    <flexbox-item :class="$cssPrefix + 'cell-bd'">
      <slot v-if="$slots.title" name="title"></slot>
      <template v-else>
        {{title}}
      </template>
    </flexbox-item>
    <div :class="$cssPrefix + 'cell-ft'">
      <slot v-if="$slots.value" name="value"></slot>
      <template v-else>
        {{value}}
      </template>
    </div>
  </flexbox>
</template>

<script>
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
  componentName: 'Cell',
  components: {
    Flexbox,
    FlexboxItem
  },
  props: {
    arrow: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    value: {
      type: String
    },
    to: {}
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'cell', this.arrow ? this.$cssPrefix + 'cell-access' : '']
    }
  },
  methods: {
    handleClick () {
      if (this.to) {
        this.$router.push(this.to)
      }
    }
  }
}
</script>
