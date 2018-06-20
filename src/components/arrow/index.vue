<template functional>
  <component :is="props.tag"
    :class="['vx-arrow', data.staticClass]"
    :style="Object.assign({
      height: props.size,
      width: props.size,
      borderColor: {
        up: `${props.color} transparent transparent ${props.color}`,
        right: `${props.color} ${props.color} transparent transparent`,
        down: `transparent ${props.color} ${props.color} transparent`,
        left: `transparent transparent ${props.color} ${props.color}`
      }[props.direction],
    }, data.staticStyle)"
    v-bind="data.attrs"
    v-on="listeners"
    >
  </component>
</template>
<script>
export default {
  componentName: 'Arrow',
  functional: true,
  props: {
    direction: {
      type: String,
      default: 'right'
    },
    size: {
      type: String,
      default: '0.2rem'
    },
    color: {
      type: String,
      default: '#999'
    },
    tag: {
      type: String,
      default: 'i'
    }
  },
  render1 (createElement, context) {
    console.log(createElement, context)
    return null
  }
}
</script>
