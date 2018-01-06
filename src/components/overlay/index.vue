<template>
  <div :class="classes" :style="styles" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    opacity: {
      type: Number,
      default: 0.35
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'overlay']
    },
    styles () {
      return 'opacity:' + this.opacity
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('click', e)
    }
  }
}
</script>

