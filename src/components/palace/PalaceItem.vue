<template>
  <div :class="['vx-palace-item', `is-nth-${$parent.column}`]"
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
    }
  },
  computed: {
    styles () {
      let result = {
        width: `${100 / this.$parent.column}%`
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
