<template functional>
  <div :class="['vx-message', 'vx-message-' + props.type, data.class, data.staticClass]"  :style="data.style" v-bind="data.attrs" v-on="listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Message',
  props: {
    type: {
      type: String,
      default: 'warning'
    }
  }
}
</script>
