<template>
  <img
    v-bind="$attrs"
    class="vx-img"
    :src="source"
    :style="$props[status + 'Style']"
    :class="`${status? 'is-' + status : ''}`"/>
</template>

<script>
import { onBeforeMount, ref, watch } from 'vue'
const error = 'data:image/svg+xml;utf8,<svg width="1024" height="1404" xmlns="http://www.w3.org/2000/svg" class="icon"><defs><style type="text/css"/></defs><g><rect fill="none" height="1406" width="1026" y="-1" x="-1"/></g><g><path fill="#B3B3B3" d="m776,328m-72,0a72,72 0 1 0 144,0a72,72 0 1 0 -144,0z"/><path fill="#B3B3B3" d="m999.904,116.608a32,32 0 0 0 -21.952,-10.912l-456.192,-31.904a31.552,31.552 0 0 0 -27.2,11.904l-92.192,114.848a32,32 0 0 0 0.672,40.896l146.144,169.952l-147.456,194.656l36.48,-173.376a32,32 0 0 0 -11.136,-31.424l-191.456,-155.744l79.616,-125.696a32,32 0 0 0 -29.28,-49.024l-240.192,16.768a32,32 0 0 0 -29.696,34.176l55.808,798.016a32.064,32.064 0 0 0 34.304,29.696l176.512,-13.184c17.632,-1.312 30.848,-16.672 29.504,-34.272s-16.576,-31.04 -34.304,-29.536l-144.448,10.784l-6.432,-92.512l125.312,-12.576a32,32 0 0 0 28.672,-35.04a32.16,32.16 0 0 0 -35.04,-28.672l-123.392,12.416l-40.416,-577.664l145.152,-10.144l-60.96,96.224a32,32 0 0 0 6.848,41.952l198.4,161.344l-58.752,279.296a30.912,30.912 0 0 0 0.736,14.752a31.68,31.68 0 0 0 1.408,11.04l51.52,154.56a31.968,31.968 0 0 0 27.456,21.76l523.104,47.552a32.064,32.064 0 0 0 34.848,-29.632l55.776,-798.048a32.064,32.064 0 0 0 -7.776,-23.232zm-98.912,630.848l-412.576,-39.648a31.52,31.52 0 0 0 -34.912,28.768a32,32 0 0 0 28.8,34.912l414.24,39.808l-6.272,89.536l-469.728,-42.72l-39.584,-118.72l234.816,-310.016a31.936,31.936 0 0 0 -1.248,-40.192l-145.632,-169.344l65.088,-81.056l407.584,28.48l-40.576,580.192z"/><text xml:space="preserve" text-anchor="start" font-size="250" y="1338.421875" x="12.953125" fill="#B3B3B3">加载失败</text></g></svg>'
const placeholder = 'data:image/svg+xml;utf8,<svg width="1024" height="1404" xmlns="http://www.w3.org/2000/svg" class="icon"><defs><style type="text/css"/></defs><g><rect fill="none" height="1406" width="1026" y="-1" x="-1"/></g><g><path fill="#B3B3B3" d="m691.8,483.9c75.2,0 136.4,-61.2 136.4,-136.4s-61.2,-136.4 -136.4,-136.4s-136.4,61.2 -136.4,136.4s61.2,136.4 136.4,136.4zm0,-221.6c47,0 85.2,38.2 85.2,85.2s-38.2,85.2 -85.2,85.2s-85.2,-38.2 -85.2,-85.2s38.3,-85.2 85.2,-85.2z"/><path fill="#B3B3B3" d="m887.7,61.8l-751.2,0c-75.2,0 -136.4,61.2 -136.4,136.4l0,627.8c0,75.2 61.2,136.4 136.4,136.4l751.2,0c72.4,0 131.7,-56.8 136,-128.1l0.4,0.4l0,-636.5c0,-75.2 -61.2,-136.4 -136.4,-136.4zm-836.4,136.4c0,-47 38.2,-85.2 85.2,-85.2l751.2,0c47,0 85.2,38.2 85.2,85.2l0,512.9l-76.8,-76.8l-228.6,216.4l-24.1,-24.3l-406.5,-414.4l-185.6,185.6l0,-399.4zm0,627.8l0,-151.9l185.4,-185.4l369.9,373.2l23.4,23.9l-0.2,0.2l18.6,18.6l6.6,6.7l-518.5,0c-47,-0.1 -85.2,-38.3 -85.2,-85.3zm921.6,0c0,47 -38.2,85.2 -85.2,85.2l-160.1,0l-23.8,-24l191.2,-177.6l78,78l0,38.4l-0.1,0z"/><text xml:space="preserve" text-anchor="start" font-size="250" y="1339.421875" x="12" fill="#B3B3B3">暂无图片</text></g></svg>'
const loading = 'data:image/svg+xml;utf8,<svg width="1024" height="1404" xmlns="http://www.w3.org/2000/svg" class="icon"><defs><style type="text/css"/></defs><g><rect fill="none" height="1406" width="1026" y="-1" x="-1"/></g><g><path fill="#B3B3B3" d="m691.8,483.9c75.2,0 136.4,-61.2 136.4,-136.4s-61.2,-136.4 -136.4,-136.4s-136.4,61.2 -136.4,136.4s61.2,136.4 136.4,136.4zm0,-221.6c47,0 85.2,38.2 85.2,85.2s-38.2,85.2 -85.2,85.2s-85.2,-38.2 -85.2,-85.2s38.3,-85.2 85.2,-85.2z"/><path fill="#B3B3B3" d="m887.7,61.8l-751.2,0c-75.2,0 -136.4,61.2 -136.4,136.4l0,627.8c0,75.2 61.2,136.4 136.4,136.4l751.2,0c72.4,0 131.7,-56.8 136,-128.1l0.4,0.4l0,-636.5c0,-75.2 -61.2,-136.4 -136.4,-136.4zm-836.4,136.4c0,-47 38.2,-85.2 85.2,-85.2l751.2,0c47,0 85.2,38.2 85.2,85.2l0,512.9l-76.8,-76.8l-228.6,216.4l-24.1,-24.3l-406.5,-414.4l-185.6,185.6l0,-399.4zm0,627.8l0,-151.9l185.4,-185.4l369.9,373.2l23.4,23.9l-0.2,0.2l18.6,18.6l6.6,6.7l-518.5,0c-47,-0.1 -85.2,-38.3 -85.2,-85.3zm921.6,0c0,47 -38.2,85.2 -85.2,85.2l-160.1,0l-23.8,-24l191.2,-177.6l78,78l0,38.4l-0.1,0z"/><text xml:space="preserve" text-anchor="start" font-size="250" id="svg_3" y="1351.21875" x="138.960938" fill="#B3B3B3">加载中</text></g></svg>'
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
          backgroundImage: `url("${loading}")`,
          backgroundSize: '30'
        }
      }
    },
    errorStyle: {
      default () {
        return {
          backgroundColor: '#f5f5f5',
          backgroundImage: `url("${error}")`,
          backgroundSize: '30'
        }
      }
    },
    placeholderStyle: {
       default () {
        return {
          backgroundColor: '#f5f5f5',
          backgroundImage: `url("${placeholder}")`,
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
