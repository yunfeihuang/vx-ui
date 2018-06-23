<template>
  <div :class="['vx-flexbox-item', 'vx-button-tab-item', {'is-active': $parent.active === name}]" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'ButtonTabItem',
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
