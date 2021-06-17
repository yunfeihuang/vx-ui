<template>
  <vx-popup
    :class="['vx-actionsheet', {'vx-actionsheet--menu': type === 'menu', 'is-not-title': !title}]"
    :open="open"
    :history="history"
    :fast-close="fastClose"
    :direction="{'default': 'bottom', 'menu': 'center'}[type] || type"
    @close="handleClose"
    @after-close="handleAfterClose">
    <div class="vx-actionsheet--inner" onselectstart="return false;">
      <slot v-if="$slots['title']"></slot>
      <div v-else-if="title" class="vx-actionsheet--title">
        {{title}}
      </div>
      <div class="vx-actionsheet--items">
        <slot></slot>
      </div>
      <div v-if="cancel" class="vx-actionsheet--cancel" @click="handleClose">
        {{cancelText}}
      </div>
    </div>
  </vx-popup>
</template>

<script>
import { provide } from 'vue'
import VxPopup from '../popup'
export default {
  name: 'VxActionsheet',
  components: {
    VxPopup
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: String
    },
    cancel: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    fastClose: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    provide('vxActionsheet', {
      change (value) {
        emit('update:open', false)
        emit('action', value)
      }
    })
    return {
      handleClose () {
        emit('update:open', false)
        emit('close')
      },
      handleAfterClose () {
        emit('after-close')
      }
    }
  }
}
</script>
