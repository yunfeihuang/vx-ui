<template>
  <div class="vx-list-view"
    ref="el"
    @scroll="handleScroll"
    @touchstart="handleTouchStart"
    @mousedown="handleTouchStart">
    <div class="vx-list-view--inner" :class="{'loading': loading === 1}">
      <div class="vx-list-view--refresh">
        <i class="vx-list-view--icon"></i>
        <vx-spinner class="vx-list-view--spinner"/>
        <span :data-loading="loadingText" :data-pulldown="pullDownText" :data-refresh="refreshText"></span>
      </div>
      <slot></slot>
      <div class="vx-list-view--loading" v-if="end===false && loading === 2">
        <vx-spinner class="vx-list-view--spinner"/>
        {{loadingText}}
      </div>
      <div class="vx-list-view--loading is-end" v-if="end" @click.stop="handleGoTop">{{endText}}</div>
    </div>
  </div>
</template>

<script>
import VxSpinner from '../spinner'
import { ref, onMounted, watch } from 'vue'
export default {
  name: 'VxListView',
  components: {
    VxSpinner
  },
  props: {
    loading: {
      type: Number,
      default: 0
    },
    loadingText: {
      type: String,
      default: '数据加载...'
    },
    pullDownText: {
      type: String,
      default: '下拉刷新'
    },
    refreshText: {
      type: String,
      default: '释放刷新'
    },
    end: {
      type: [Boolean, Number],
      default: false
    },
    endText: {
      type: String,
      default: '已到底部,点击回到顶部'
    }
  },
  setup (props, { emit, attrs }) {
    const el = ref(null)
    let scrollTimer = null
    let loadingNode = null
    let innerNode = null
    const setTransformTop = (top = 0) => {
      innerNode.style.cssText = `-webkit-transform:translate3d(0,${top}px,0);transform:translate3d(0,${top}px,0);-webkit-transition:transform 0.36s ease 0s;transition:transform 0.36s ease 0s;`
    }
    watch(() => props.loading, val => {
      if (!val) {
        setTransformTop()
      }
    })
    const handlePullup = (e) => {
      if (!props.end && attrs['onPullup'] && el.value.scrollHeight - el.value.offsetHeight - el.value.scrollTop <= loadingNode.offsetHeight) {
        emit('update:loading', 2)
        emit('pullup', e)
      }
    }
    const handleScroll = (e) => {
      scrollTimer && clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        !props.loading && props.end === false && handlePullup(e)
      }, 200)
    }
    const handleTouchStart = (e) => {
      let scrollTop = el.value.scrollTop
      if (attrs['onPulldown'] && !props.loading && scrollTop === 0) {
        let pageY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY
        let markHeight = el.value.querySelector('.vx-list-view--refresh').offsetHeight
        const handleTouchMove = (e) => {
          e.preventDefault()
          let top = (e.changedTouches ? e.changedTouches[0].pageY : e.pageY) - pageY - scrollTop
          if (top > 0) {
            innerNode.style.cssText = `-webkit-will-change:transform;will-change:transform;-webkit-transform:translate3d(0,${top}px,0);transform:translate3d(0,${top}px,0);`
            if (top > markHeight) {
              innerNode.classList.add('active')
            } else {
              innerNode.classList.remove('active')
            }
          }
        }
        const handleTouchEnd = () => {
          document.removeEventListener(e.changedTouches ? 'touchmove' : 'mousemove', handleTouchMove, false)
          if (innerNode.classList.contains('active')) {
            innerNode.classList.remove('active')
            setTransformTop(markHeight)
            emit('update:loading', 1)
            emit('pulldown')
          } else {
            setTransformTop()
          }
        }
        document.addEventListener(e.changedTouches ? 'touchmove' : 'mousemove', handleTouchMove, false)
        document.addEventListener(e.changedTouches ? 'touchend' : 'mouseup', handleTouchEnd, {
          once: true
        })
      }
    }
    const handleGoTop = () => {
      el.value.scrollTop = 0
    }
    onMounted(() => {
      innerNode = el.value.querySelector('.vx-list-view--inner')
      loadingNode = el.value.querySelector('.vx-list-view--loading')
    })
    return {
      el,
      handleScroll,
      handleTouchStart,
      handleGoTop
    }
  }
}
</script>
