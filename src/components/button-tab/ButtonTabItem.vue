<template>
  <div :class="['vx-flexbox--item', 'vx-button-tab--item', {'is-active': $parent.active === name}]" @click="$parent.change(name)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonTabItem',
  componentName: 'ButtonTabItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  }
}
</script>
