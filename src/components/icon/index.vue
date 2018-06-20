<template functional>
  <i :class="['vx-iconfont', data.class, data.staticClass]" :style="data.style" v-bind="data.attrs" v-on="listeners">
    <slot></slot>
  </i>
</template>

<script>
export default {
  componentName: 'Icon'
}
</script>
