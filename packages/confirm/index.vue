<template>
  <div class="vx-confirm" ref="el">
    <vx-overlay :open="open"></vx-overlay>
    <transition name="vx--confirm-scale" @before-enter="handleBeforeEnter" @after-enter="handleEnter" @after-leave="handleLeave">
      <div class="vx-confirm--inner" v-show="open">
        <div v-if="title" class="vx-confirm--title">{{title}}</div>
        <div class="vx-confirm--body">
          <div class="vx-confirm--table">
            <div class="vx-confirm--cell">
              <slot :open="open"></slot>
            </div>
          </div>
        </div>
        <div :class="['vx-confirm--footer']" onselectstart="return false;">
          <button :class="[{'is-cancel-light': cancelLight}]" v-if="cancel" type="button" @click="handleCancel">{{cancelText}}</button>
          <component :is="confirmTag" v-bind="confirmProps" @click="handleConfirm($event)">{{confirmText}}</component>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { useHistory } from '@/utils/mixins'
import VxOverlay from '../overlay'
import { ref, onMounted } from 'vue'
export default {
  name: 'VxConfirm',
  components: {
    VxOverlay
  },
  emits: ['confirm'],
  props: {
    open: {
      type: Boolean,
      default: false
    },
    cancel: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    cancelLight: {
      type: Boolean
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmTag: {
      type: String,
      default: 'button'
    },
    confirmProps: {
      type: Object,
      default () {
        return {type: 'button'}
      }
    }
  },
  setup (props, { emit }) {
    const el = ref(null)
    const instance = useHistory(props, { emit })
    const handleBeforeEnter = () => {
      el.value.classList.add('is-show')
      instance.pushState()
    }
    const handleCancel = () => {
      emit('update:open', false)
      emit('close')
      emit('button-click', 'cancel')
    }
    let eventTimer = null
    const handleConfirm = (e) => {
      if (e.target && e.target.nodeName && e.target.nodeName.toLowerCase() === 'a') {
        eventTimer && clearTimeout(eventTimer)
        eventTimer = setTimeout(() => {
          if (props.open) {
            emit('update:open', false)
            emit('confirm')
          }
        }, 400)
      } else {
        if (props.open) {
          emit('update:open', false)
          emit('confirm')
        }
      }
      emit('button-click', 'confirm')
    }
    const handleEnter = () => {
      emit('open')
    }
    const handleLeave = () => {
      instance.goBack()
      emit('after-close')
      el.value.classList.remove('is-show')
    }
    onMounted(() => {
      props.open && handleBeforeEnter()
    })
    return {
      el,
      handleBeforeEnter,
      handleCancel,
      handleConfirm,
      handleEnter,
      handleLeave
    }
  }
}
</script>
