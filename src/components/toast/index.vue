<template>
  <transition name="vx--popup-fade" @enter="handleEnter" @after-leave="handleLeave">
    <div v-show="open" :class="['vx-toast','vx-toast--' + align]">
      <div class="vx-toast--inner" ref="inner">
        <div class="vx-toast--content">
          <template v-if="type != 'default'">
            <vx-spinner v-if="type==='loading'" class="vx-toast--loading" v-bind="spinnerProps"/>
            <i v-else :class="['vx-toast--icon',`vx-toast--${type}`]"></i>
            <br />
          </template>
          <slot></slot>
        </div>
      </div>
      <vx-overlay :open="isOverlay && open" :opacity="overlayOpacity"></vx-overlay>
    </div>
  </transition>
</template>

<script>
import VxSpinner from '../spinner'
import VxOverlay from '../overlay'
import { onMounted, ref } from 'vue'

export default {
  name: 'VxToast',
  components: {
    VxSpinner,
    VxOverlay
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'top'
    },
    duration: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'default'
    },
    destroy: {
      type: Boolean,
      default: false
    },
    spinnerProps: {
      type: Object,
      default () {
        return {
          color: '#999',
          primaryColor: '#fff'
        }
      }
    },
    isOverlay: {
      type: Boolean
    },
    overlayOpacity: {
      type: Number
    }
  },
  setup (props, { emit }) {
    const inner = ref(null)
    let timer = null
    const handleEnter = () => {
      const node = inner.value
      if (node) {
        let width = node.offsetWidth + 4
        let height = node.offsetHeight + 4
        requestAnimationFrame(() => {
          node.parentNode.style.width = width + 'px'
          node.parentNode.style.height = height + 'px'
        })
        timer && clearTimeout(timer)
        if (props.duration) {
          timer = setTimeout(() => {
            emit('update:open', false)
            emit('close')
          }, props.duration)
        }
      }
    }
    onMounted(() => {
      props.open && handleEnter()
    })
    return {
      inner,
      handleEnter,
      handleLeave () {
        emit('after-close')
      }
    }
  }
}
</script>
