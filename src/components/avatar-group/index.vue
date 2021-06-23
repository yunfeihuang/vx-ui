<template functional>
  <div class="vx-avatar-group--wrapper">
    <slot name="prepend"></slot>
    <div class="vx-avatar-group">
      <slot></slot>
    </div>
    <slot name="append"></slot>
  </div>
</template>

<script>
export default {
  name: 'VxAvatarGroup'
}
</script>
