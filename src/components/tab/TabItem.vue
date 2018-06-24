<template>
  <div :class="['vx-flexbox-item', 'vx-tab-item', {'is-active': $parent.active === name}]" @click="handleClick">
    <span v-if="$parent.underlineWidth" class="vx-tab-item-text">
      <slot></slot>
    </span>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  componentName: 'TabItem',
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
