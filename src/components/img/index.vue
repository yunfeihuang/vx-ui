<template>
  <img
    v-bind="$attrs"
    class="vx-img"
    :src="status === 'success' ? source : defaultSrc"
    :style="$props[status + 'Style']"
    :class="`${status? 'is-' + status : ''}`"/>
</template>

<script>
import error from './error.svg'
import placeholder from './placeholder.svg'
import loading from './loading.svg'
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
    loadingStyle: {
      default () {
        return {
          backgroundColor: '#f5f5f5',
          backgroundImage: `url(${loading})`,
          backgroundSize: '30'
        }
      }
    },
    errorStyle: {
      default () {
        return {
          backgroundColor: '#f5f5f5',
          backgroundImage: `url(${error})`,
          backgroundSize: '30'
        }
      }
    },
    placeholderStyle: {
       default () {
        return {
          backgroundColor: '#f5f5f5',
          backgroundImage: `url(${placeholder})`,
          backgroundSize: '30'
        }
      }
    },
    defaultSrc: {
      type: String,
      default: transparent
    }
  },
  setup (props, { emit }) {
    const status = ref('placeholder')
    const source = ref(null)
    const loadImage = (src) => {
      if (src) {
        source.value = loading
        status.value = 'loading'
        let image = new Image()
        image.onload = () => {
          source.value = src
          status.value = 'success'
          emit('load')
        }
        image.onerror = () => {
          source.value = error
          status.value = 'error'
          emit('error')
        }
        image.src = src
      } else {
        source.value = placeholder
        status.value = 'placeholder'
      }
    }
    watch(props => props.src, val => {
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
