<template>
  <img
    v-bind="$attrs"
    class="vx-img"
    :src="source"
    :class="`${status? 'is-' + status : ''}`"/>
</template>

<script>
import { onBeforeMount, ref, watch } from 'vue'
const transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg=='
export default {
  name: 'VxImg',
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    lazyload: {
      type: Boolean
    },
    defaultSrc: {
      type: String,
      default: transparent
    }
  },
  setup (props, { emit }) {
    const status = ref('placeholder')
    const source = ref(props.defaultSrc)
    const loadImage = (src) => {
      if (src) {
        status.value = 'loading'
        let image = new Image()
        image.onload = () => {
          source.value = src
          status.value = 'success'
          emit('load')
        }
        image.onerror = () => {
          status.value = 'error'
          emit('error')
        }
        image.src = src
      } else {
        status.value = 'placeholder'
      }
    }
    watch(() => props.src, val => {
      loadImage(val)
    })
    onBeforeMount(() => {
      loadImage(props.src)
    })
    return {
      status,
      source
    }
  }
}
</script>
