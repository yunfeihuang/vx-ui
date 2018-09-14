<template>
  <div :class="['vx-sidebar--item', {'is-active': $parent.active === name}]" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'SidebarItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('change', this.name)
    }
  }
}
</script>
