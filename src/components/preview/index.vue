<template>
<div class="vx-photoswiper" tabindex="-1" role="dialog" aria-hidden="true" ref="el">
    <!-- Background of PhotoSwipe.
          It's a separate element as animating opacity is faster than rgba(). -->
      <div class="pswp__bg">
        <vx-spinner color="#aaa" primaryColor="#fff" style="margin:auto;width:20px;height:20px;position:absolute;top:0;left:0;right:0;bottom:0"></vx-spinner>
      </div>
      <!-- Slides wrapper with overflow:hidden. -->
      <div class="pswp__scroll-wrap">
        <!-- Container that holds slides.
          PhotoSwipe keeps only 3 of them in the DOM to save memory.
          Don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <!--  Controls are self-explanatory. Order can be changed. -->
            <div class="pswp__counter"></div>
            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
            <button class="pswp__button pswp__button--share" title="Share"></button>
            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
            <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
            <!-- element will get class pswp__preloader--active when preloader is running -->
            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
            <div class="pswp__share-tooltip"></div>
          </div>
          <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
          <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import VxSpinner from '../spinner'
export default {
  name: 'VxPreview',
  components: {
    VxSpinner
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      default: 0
    },
    options: {
      type: Object
    }
  },
  setup (props, { emit }) {
    // https://photoswipe.com/documentation/getting-started.html
    let photoswipe = null
    let el = ref(null)
    let loading = ref(false)
    const loadImages = (array) => {
      let windowWidth = window.innerWidth
      return new Promise((resolve) => {
        let i = 0
        let result = []
        const fn = () => {
          if (array[i]) {
            let image = new Image()
            image.onload = () => {
              let natural = {
                w: image.naturalWidth,
                h: image.naturalHeight
              }
              result.push({
                src: image.src,
                w: natural.w > windowWidth ? windowWidth : natural.w,
                h: natural.w > windowWidth ? natural.h / natural.w * windowWidth : natural.h
              })
              i++
              fn()
            }
            image.onerror = () => {
              result.push({})
              i++
              fn()
            }
            image.src = array[i]
          } else {
            resolve(result)
          }
        }
        fn()
      })
    }
    onMounted(() => {
      import('photoswipe/dist/photoswipe.css')
      import('photoswipe/dist/default-skin/default-skin.css')
      loading.value = true
      el.value.style.display = 'block'
      el.value.querySelector('.pswp__bg').style.opacity = 1
      loadImages(props.list).then(list => {
        loading.value = false
        import('photoswipe').then(res => {
          let PhotoSwipe = res.default
          import('photoswipe/dist/photoswipe-ui-default').then(resUI => {
            let UI = resUI.default
            let options = Object.assign({
              history: true,
              tapToClose: true,
              shareEl: false,
              index: props.index
            }, props.options)
            el.value.style.display = 'block'
            photoswipe = new PhotoSwipe(el.value, UI, list, options)
            photoswipe.init()
            photoswipe.listen('close', () => {
              emit('close')
            })
          })
        })
      })
    })
    return {
      el,
      loading,
      close () {
        photoswipe.close && photoswipe.close()
      }
    }
  }
}
</script>
