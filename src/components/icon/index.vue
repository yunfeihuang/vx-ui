<template>
  <i :class="['vx-iconfont']"
    v-bind="$attrs">
    <slot></slot>
  </i>
</template>

<script>
export default {
  name: 'VxIcon'
}
</script>
