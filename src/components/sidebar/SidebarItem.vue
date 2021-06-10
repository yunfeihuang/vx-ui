<template>
  <div :class="['vx-sidebar--item', {'is-active': $parent.active === name}]" @click="$parent.change(name)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VxSidebarItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  }
}
</script>
