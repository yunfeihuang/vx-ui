<template>
  <div :class="['vx-grid--item', {'is-divider': $parent.gutter == 1}]"
    :style="styles"
    @click="linkTo">
    <div class="vx-grid--item-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VxGridItem',
  props: {
    to: {
      type: [String, Object]
    },
    col: {
      type: Number,
      default: 1
    }
  },
  computed: {
    styles () {
      let result = {
        width: `${100 / this.$parent.col * this.col}%`,
        borderRightWidth: `${this.$parent.gutter}px`,
        borderBottomWidth: `${this.$parent.gutter}px`
      }
      return result
    }
  },
  methods: {
    linkTo () {
      this.to && this.$router.push(this.to)
    }
  }
}
</script>
