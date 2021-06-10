<template>
  <div :class="['vx-button-tab--item', {'is-active': $parent.active === name}]" @click="$parent.change(name)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VxButtonTabItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  }
}
</script>
