<template functional>
  <i :class="['vx-iconfont', data.staticClass]" :style="data.staticStyle" v-bind="data.attrs" v-on="listeners">
    <slot></slot>
  </i>
</template>

<script>
export default {
  componentName: 'Icon'
}
</script>
