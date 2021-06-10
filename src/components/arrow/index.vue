<template>
  <component :is="tag"
    :class="['vx-arrow', `vx-arrow--direction-${direction}`]"
    :style="[Object.assign({
      display: 'inline-block',
      borderWidth: '1px',
      borderStyle: 'solid',
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      transform: 'rotate(45deg)',
      height: size,
      width: size,
      borderColor: {
        up: `${color} transparent transparent ${color}`,
        right: `${color} ${color} transparent transparent`,
        down: `transparent ${color} ${color} transparent`,
        left: `transparent transparent ${color} ${color}`
      }[direction],
    })]"
    v-bind="$attrs"
    >
  </component>
</template>
<script>
export default {
  name: 'VxArrow',
  props: {
    direction: {
      type: String,
      default: 'right'
    },
    size: {
      type: String,
      default: '0.18rem'
    },
    color: {
      type: String,
      default: 'rgba(153, 153, 153, 0.6)'
    },
    tag: {
      type: String,
      default: 'i'
    }
  }
}
</script>
