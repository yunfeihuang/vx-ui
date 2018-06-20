<template functional>
  <div :class="['vx-layout', data.class, data.staticClass]" :style="data.style" v-bind="data.attrs" v-on="listeners">
    <flexbox :class="['vx-layout-flexbox']" direction="column">
      <slot name="header"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </flexbox>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Layout'
}
</script>
