<template>
  <div class="vx-popup" ref="el">
    <vx-overlay v-if="!full" :opacity="overlayOpacity" :open="open" @click="handleClose"></vx-overlay>
    <transition
      v-if="$slots.inner"
      name="vx--popup-fade"
      @after-enter="handleEnter"
      @after-leave="handleLeave">
      <div v-if="open">
        <slot name="inner"></slot>
      </div>
    </transition>
    <transition
      v-else
      :name="full?'vx--popup-full-slide-'+direction:'vx--popup-slide-'+direction"
      @after-enter="handleEnter"
      @after-leave="handleLeave">
      <div v-if="open" :class="['vx-popup--inner', 'vx-popup--' + direction, {'is-full': full}]" @click="handleClose2">
        <div class="vx-popup--nav" v-if="title && !showClose">
          <button type="button" @click="close">
            <vx-arrow direction="left" color="#666" size="0.24rem"/>
          </button>
          <div class="vx-popup--nav-title">{{title}}</div>
        </div>
        <div class="vx-popup--nav" v-else-if="showClose && full">
          <div class="vx-popup--nav-title">{{title}}</div>
          <i class="vx-popup--close" @click="close"></i>
        </div>
        <slot v-else name="header"></slot>
        <div class="vx-popup--body" v-if="direction === 'center'">
          <i v-if="showClose" class="vx-popup--close" @click="close"></i>
          <slot :open="afterOpen"></slot>
        </div>
        <div class="vx-popup--body is-flex" v-else>
          <slot :open="afterOpen"></slot>
        </div>
        <slot name="footer"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { useHistory } from '@/utils/mixins'
import VxOverlay from '../overlay'
import VxArrow from '../arrow'
import { ref, watch, onMounted } from 'vue'

export default {
  name: 'VxPopup',
  components: {
    VxOverlay,
    VxArrow
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'bottom'
    },
    fastClose: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    overlayOpacity: {
      type: Number
    }
  },
  setup (props, { emit }) {
    const instance = useHistory(props, { emit })
    const el = ref(null)
    const afterOpen = ref(false)
    const handleEnter = () => {
      afterOpen.value = true
      emit('open')
    }
    const close = () => {
      emit('update:open', false)
      emit('close')
    }
    const handleClose = () => {
      props.fastClose && close()
    }
    const handleClose2 = (e) => {
      if (props.fastClose && e.target === el.value.querySelector('.vx-popup--inner')) {
        close()
      }
    }
    const handleLeave = () => {
      instance.goBack()
      el.value.style.display = 'none'
      afterOpen.value = false
      emit('after-close')
    }
    watch(() => props.open, val => {
      if (val) {
        requestAnimationFrame(() => {
          el.value.style.display = 'block'
          instance.pushState()
        })
      }
    })
    onMounted(() => {
      if (props.open) {
        requestAnimationFrame(() => {
          el.value.style.display = 'block'
          instance.pushState()
          handleEnter()
        })
      }
    })
    return {
      el,
      afterOpen,
      handleClose,
      handleClose2,
      handleLeave,
      close
    }
  }
}
</script>
