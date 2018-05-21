<template>
  <div class="vx-accordion">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Accordion',
  methods: {
    updateChildren (vnode) {
      this.$children.forEach(item => {
        if (item !== vnode) {
          item.handleOpen(false, true)
        }
      })
    }
  }
}
</script>
