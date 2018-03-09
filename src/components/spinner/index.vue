<template>
  <div :class="classes">
    <div :class="$cssPrefix + 'spinner'"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Spinner',
  props: {
    color: {
      type: String
    },
    primaryColor: {
      type: String
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'spinner-wrapper']
    }
  },
  mounted () {
    if (this.color) {
      this.$el.children[0].style.borderColor = this.color
    }
    if (this.primaryColor) {
      this.$el.children[0].style.borderTopColor = this.primaryColor
    }
  }
}
</script>
