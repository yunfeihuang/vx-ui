<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>

let flexMap = {
  direction: {
    column: `flexbox-column`
  },
  wrap: {
    wrap: `flexbox-wrap`
  },
  justify: {
    center: `flexbox-content-center`
  },
  align: {
    center: `flexbox-align-center`
  }
}

export default {
  componentName: 'Flexbox',
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
        this.$cssPrefix + 'flexbox'
      ]
      for (let name in flexMap) {
        if (this[name] && flexMap[name][this[name]]) {
          array.push(this.$cssPrefix + flexMap[name][this[name]])
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
  }
}
</script>
