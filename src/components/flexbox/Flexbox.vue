<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'

let flexMap = {
  direction: {
    column: `${cssPrefix}flexbox-column`
  },
  wrap: {
    wrap: `${cssPrefix}flexbox-wrap`
  },
  justify: {
    center: `${cssPrefix}flexbox-content-center`
  },
  align: {
    center: `${cssPrefix}flexbox-align-center`
  }
}

export default {
  name: 'Flexbox',
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
    },
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes () {
      let array = [
        cssPrefix + 'flexbox'
      ]
      for (let name in flexMap) {
        if (this[name] && flexMap[name][this[name]]) {
          array.push(flexMap[name][this[name]])
        }
      }
      return array
    }
  },
  watch: {
    gutter (value) {
      let width = this.$el.clientWidth
      requestAnimationFrame(() => {
        this.$el.style.width = `${width + this.gutter}px`
        this.$el.style.marginLeft = `-${this.gutter / 2}px`
      })
    }
  },
  mounted () {
    if (this.gutter) {
      let width = this.$el.clientWidth
      requestAnimationFrame(() => {
        this.$el.style.width = `${width + this.gutter}px`
        this.$el.style.marginLeft = `-${this.gutter / 2}px`
      })
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
