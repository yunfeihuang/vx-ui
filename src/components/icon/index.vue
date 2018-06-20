<template functional>
  <i :class="['vx-iconfont', data.class, data.staticClass]" v-html="props.html" :style="data.style" v-bind="data.attrs" v-on="listeners">
    <slot></slot>
  </i>
</template>

<script>
export default {
  componentName: 'Icon',
  props: {
    html: {
      type: String
    }
  }
}
</script>
