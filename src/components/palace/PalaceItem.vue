<template>
  <div :class="['vx-palace--item']"
    :style="styles"
    @click="linkTo">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PalaceItem',
  componentName: 'PalaceItem',
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
        width: `${100 / this.$parent.grid * this.col}%`
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
