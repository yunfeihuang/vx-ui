<template>
  <div :class="['vx-tab--item', {'is-active':$parent.active === name}]" @click="handleClick">
    <span v-if="$parent.underlineWidth" class="vx-tab-item-text">
      <slot></slot>
    </span>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'VxStepItem',
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  methods: {
    handleClick () {
      this.$emit('change', this.name)
    }
  }
}
</script>
