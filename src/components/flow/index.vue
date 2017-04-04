<template>
  <div :class="_clas" :style="style">
    <div :class="[cssPrefix + 'flow-inner']">
      <slot></slot>
      <div :class="[cssPrefix + 'flow-loading']" v-if="loading">数据加载中...</div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
let touch = {}
export default {
  mixins: [base],
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'flow', this.clas]
    }
  },
  mounted () {
    let timer = null
    this._events['on-pullup'] && this.$el.addEventListener('scroll', (e) => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        this.scrollHandler(e)
      }, 200)
    })
    if (this._events['on-pulldown']) {
      this.$el.addEventListener('touchstart', this.touchStartHandler)
      this.$el.addEventListener('touchmove', this.touchMoveHandler)
      this.$el.addEventListener('touchend', this.touchEndHandler)
    }
  },
  methods: {
    pullDownHandler () {
      this.$emit('on-pulldown')
    },
    pullUpHandler () {
      this.$emit('on-pullup')
    },
    scrollHandler (e) {
      if (this.$el.scrollHeight - this.$el.offsetHeight - this.$el.scrollTop <= 1) {
        this.$emit('on-pullup', e)
      }
    },
    touchStartHandler (e) {
      if (!touch.inner) {
        touch.inner = this.$el.querySelector('.' + cssPrefix + 'flow-inner')
      }
      if (!touch.pageY && this.$el.scrollTop === 0) {
        touch.pageY = e.changedTouches[0].pageY
      }
    },
    touchMoveHandler (e) {
      let pageY = e.changedTouches[0].pageY
      if (touch.pageY && touch.pageY < pageY) {
        e.preventDefault()
        e.stopPropagation()
        if (touch.inner) {
          let top = pageY - touch.pageY
          top = top > 100 ? 100 : top
          let cssText = '-webkit-will-change:transform;will-change:transform;-webkit-transform:translateY(' + top + 'px);transform:translateY(' + top + 'px);'
          touch.inner.style.cssText = cssText
          if (touch.pageY && pageY - touch.pageY > 60) {
            touch.inner.classList.add('active')
          } else {
            touch.inner.classList.remove('active')
          }
        }
      }
      if (!touch.pageY && this.scrollTop <= 0) {
        touch.pageY = pageY
      } else if (this.scrollTop > 0) {
        touch.pageY = 0
      }
    },
    touchEndHandler (e) {
      let pageY = e.changedTouches[0].pageY
      if (touch.pageY && touch.inner && touch.pageY < pageY) {
        if (pageY - touch.pageY > 60) {
          setTimeout(() => {
            let cssText = '-webkit-transform:translateY(40px);transform:translateY(40px);-webkit-transition:transform 0.5s ease 0s;transition:transform 0.5s ease 0s;'
            touch.inner.style.cssText = cssText
            setTimeout(() => {
              touch.inner.classList.remove('active')
              touch.inner.classList.add('loading')
              this.$emit('on-pulldown', e)
            }, 500)
          }, 600)
        } else {
          let cssText = '-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;'
          touch.inner.style.cssText = cssText
          setTimeout(() => {
            touch.inner.classList.remove('active')
            touch.inner.style.cssText = ''
          }, 500)
        }
        if (touch.pageY !== pageY) {
          e.stopPropagation()
          e.preventDefault()
        }
      }
      touch.pageY = 0
    },
    stopLoading () {
      let cssText = '-webkit-transform:translateY(0);transform:translateY(0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;'
      touch.inner.style.cssText = cssText
      touch.inner.classList.remove('loading')
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &flow{
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      &-inner{
        position: relative;
        &:before{
          padding:1px 0;
          content: "下拉刷新";
          position: absolute;
          top: -40px;
          left: 50%;
          line-height: 40px;
          width: 90px;
          margin-left: -45px;
          color: #999;
          background:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUI3NTgzMkE1OTFDMTFFNkEzQkNEQzI5NDU3QTcwMkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUI3NTgzMkI1OTFDMTFFNkEzQkNEQzI5NDU3QTcwMkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQjc1ODMyODU5MUMxMUU2QTNCQ0RDMjk0NTdBNzAyQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQjc1ODMyOTU5MUMxMUU2QTNCQ0RDMjk0NTdBNzAyQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoqXvUoAAAH2SURBVHja7Jq9SwNBEMX3JH/V/R2K3xgECyE2NqKFWCoGxE4LrSwVtLC1SJFOTaGVBLTRIIIGJYFoPN/ilIb7cGd3LzcDj3R7+d3Nzb63SRBFkTJd9Xpdf5hcOAjD0MhCI6pgVTjgEuPagY/AAcc7LC097C1NU9pomZrSnO9w5OM8kG1JgAVYprQYD2lpMR5iPMR4yDsswAIswAIswAIswAIswAIswE4r1YlHypzrJB7G5eYsT/iAYOJkOlvH6YirpZeghmedegctcgF3oFGo7QlsD5qE3jmHVhMqM7RullqFLm1M6VOo6hj2HNqxuS3pu1tzBPsEzaftsv8C96EJqGUZ9huagZ5dGA99p8cJ3lZtQRcunZZu6zVLsNr9rPtgLbehM2bYN2ga+vIBWA+POdqyuGoBuvcpPGgzMgZ1GWD3oWMf09I1VDG85i207HM8PCSZqC5tfR3f83DFUMjQT/YmDwcAXQMh4wTay9OJR5Mmd5aQ8UBTWeUJWNHenDZk6H12CnrNI3CWkLFBjkrlFbhPfjtJyNAeeZPri9g8tWwlCBkv0CxnELF9TFuj9h5kTcvQI+cXcHEuXR0QMnbpBEMNG/BfIeMKWrFxcVe/PLTJlGhz8kHWsWfjwiXlrhpkPz/V77myGnZgZTBgJK7C/Zv2R4ABAHf8h3gIMT/lAAAAAElFTkSuQmCC') no-repeat left center;
          -webkit-background-size: 23px 18px;
          background-size: 23px 18px;
          padding-left: 20px;
          white-space: nowrap;
        }
        &.active:before{
          content:"释放刷新";
          background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUI3NTgzMkU1OTFDMTFFNkEzQkNEQzI5NDU3QTcwMkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUI3NTgzMkY1OTFDMTFFNkEzQkNEQzI5NDU3QTcwMkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQjc1ODMyQzU5MUMxMUU2QTNCQ0RDMjk0NTdBNzAyQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQjc1ODMyRDU5MUMxMUU2QTNCQ0RDMjk0NTdBNzAyQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgSZUqsAAAHlSURBVHja7Jq9S8NAGMYTUwotlOogtJNgcXJRx4AdXB1EcHRRl44KfswKfiw66aKDCEUU/TsC/g3+LRKfw7fQoSa55r3LJbwPPEt6JP1xH3mfu/hxHHtZFUWR57rCMEz8fabg/7cH79p8YK1A2BX4Hv6Bv+BvGw8tqofb8CfchFvwG1yvKrAPP8O9sWtr8HVVgY/h7QnXj+DNqgGvJ/TkqOe7VQHuwO9wkNBmHh6mtCkFcECwWXpvAz4tO/Al3Ndof6FqiLICb03RY6o+eIVnywa8CL/QgqSrBfipTMANKi7aOe6xAw/KAqzKxlWG+9zCy64Dq1Cwz3SvJq3wDVeBR6GAU6qH71wEHg8F3BrQnHYGeFIo4NYjrd5OAP8XCjg1R+/nWtHAfVvxjiqw8yKBOxTgA8+ezqjmtg6sEwq4w8iQ0pVV4CvNUMCpLi2Svi1gFQpOvGKldkgObQD3coQCbt14f3tixoBVifeRMxRwqk6LZssUMFco4NQS/JA1aOvqgJymmBGIber4OmdLWUVnUKzAaWdGrux4OCcBFmABFmABFmABFmABFmABFuBMMvlhmu8isJE8LEO66kPaxFe3XDseJuewk3ta8loSYAGWVVoKDxnSUnhI4SGFh8xheS1Np18BBgCEbkVE53v/8wAAAABJRU5ErkJggg==');
        }
        &.loading:before{
          content:"数据加载...";
          background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURYeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/igaQAAAAJdFJOU///////////AFNPeBIAAAB+SURBVHjabJFJFkMhCATL2fuf1tksEozkxxWU/YRuTeZ57KnGeMIBQ8E5pe1d4ISJB0+HDvjzkNeDHLh3FyDIvTuaIMq17h1rBcuCi1ao1/LKkb1tkSDh+REncVSKoNZkzwIf2qCplPZWjjJkNmwiRHH0DTrqPA2YU//7jtcA33IgGu5w0lkAAAAASUVORK5CYII=');
          -webkit-background-size:20px;
          background-size:20px;
        }
      }
      &-loading{
        text-align:center;
        line-height:40px;
      }
    }
  }
</style>
