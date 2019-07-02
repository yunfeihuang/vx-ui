<template functional>
  <component :is="props.tag"
    :class="['vx-arrow', data.staticClass, data.class]"
    :style="[Object.assign({
      display: 'inline-block',
      borderWidth: '1px',
      borderStyle: 'solid',
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      transform: 'rotate(45deg)',
      height: props.size,
      width: props.size,
      borderColor: {
        up: `${props.color} transparent transparent ${props.color}`,
        right: `${props.color} ${props.color} transparent transparent`,
        down: `transparent ${props.color} ${props.color} transparent`,
        left: `transparent transparent ${props.color} ${props.color}`
      }[props.direction],
    }, data.style)]"
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
