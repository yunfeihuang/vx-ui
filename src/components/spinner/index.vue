<template functional>
  <div :class="['vx-spinner-wrapper', data.class, data.staticClass]" :style="data.style" v-bind="data.attrs" v-on="listeners">
    <div class="vx-spinner" :style="`border-color: ${props.primaryColor} ${props.color} ${props.color} ${props.color}`"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Spinner',
  props: {
    color: {
      type: String,
      default: '#eee'
    },
    primaryColor: {
      type: String,
      default: '#3399ff'
    }
  }
}
</script>
