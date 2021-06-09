<template>
  <transition name="popup-fade">
    <div v-show="props.open" :class="['vx-overlay', data.staticClass, data.class]"
      :style="Object.assign({opacity:`${props.opacity}`}, data.style)"
      v-bind="data.attrs"
      v-on="listeners">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Overlay',
  componentName: 'Overlay',
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

