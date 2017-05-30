<template>
  <div :class="classes" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'

let flexMap = {
  direction: {
    column: 'flexbox-column'
  },
  wrap: {
    wrap: 'flexbox-wrap'
  },
  justify: {
    center: 'flexbox-content-center'
  },
  align: {
    center: 'flexbox-align-center'
  }
}

export default {
  props: {
    direction: {
      type: String,
      default: 'normal'
    },
    wrap: {
      type: String,
      default: 'normal'
    },
    justify: {
      type: String,
      default: 'normal'
    },
    align: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    classes () {
      let array = [
        cssPrefix + 'flexbox',
        'flexbox'
      ]
      for (let name in flexMap) {
        if (this[name] && flexMap[name][this[name]]) {
          array.push(flexMap[name][this[name]])
        }
      }
      return array
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('click', e)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &flexbox{
    
    }
  }
</style>
