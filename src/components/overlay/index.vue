<template>
  <transition name="popup-fade">
    <div v-show="open" :class="['vx-overlay']"
      :style="Object.assign({opacity:`${opacity}`})"
      @touchmove.prevent
      v-bind="$attrs">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'VxOverlay',
  props: {
    opacity: {
      type: Number
    },
    open: {
      type: Boolean
    }
  }
}
</script>

