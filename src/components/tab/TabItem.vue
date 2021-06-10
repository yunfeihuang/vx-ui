<template>
  <div
    :style="{
      'min-width': $parent.minTabItemWidth
    }"
    :class="[
      'vx-tab--item',
      {
        'is-flexbox-item': $parent.layout=='default',
        'is-active': $parent.active === name
      }
    ]"
    @click="handleClick(name)">
    <span v-if="$parent.underlineWidth" class="vx-tab--item-text">
      <slot></slot>
    </span>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'VxTabItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  methods: {
    handleClick (name) {
      this.$parent.change(name)
    }
  }
}
</script>
