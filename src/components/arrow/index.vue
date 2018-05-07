<template functional>
  <component :is="props.tag"
    class="v-arrow"
    :style="Object.assign({
      height: props.size,
      width: props.size,
      borderColor: {
        up: `${props.color} transparent transparent ${props.color}`,
        left: `${props.color} ${props.color} transparent transparent`,
        down: `transparent ${props.color} ${props.color} transparent`,
        right: `transparent transparent ${props.color} ${props.color}`
      }[props.direction],
    }, props.styles)"
    >
  </component>
</template>
<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    styles: {
      type: Object
    },
    size: {
      type: String,
      default: '10px'
    },
    color: {
      type: String,
      default: '#999'
    },
    tag: {
      type: String,
      default: 'i'
    }
  }
}
</script>
