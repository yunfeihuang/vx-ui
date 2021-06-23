<template>
  <div ref="el" class="vx-picker--wrapper" onselectstart="return false;">
    <div
      class="vx-picker"
      :style="`height:${viewItem * itemHeight}px`"
      @touchstart="handleTouchStart">
      <div class="vx-picker--scroller" :style="`padding:${Math.floor(viewItem / 2) * itemHeight}px 0`">
        <div :style="`height:${itemHeight}px;line-height:${itemHeight}px`" v-if="placeholder" :class="['vx-picker--item','vx-picker--placeholder']">
          {{placeholder}}
        </div>
        <div
          v-for="(item, index) in options"
          :style="`height:${itemHeight}px;line-height:${itemHeight}px`"
          :class="['vx-picker--item',{'is-active' : item.value === modelValue}]"
          v-html="item.label"
          :key="index">
        </div>
      </div>
    </div>
    <div class="vx-picker--indicator">
      <div
        class="vx-picker--indicator-top"
        :style="{
          top: `${Math.floor(viewItem / 2) * itemHeight}px`,
          boxShadow: `rgba(255, 255, 255, 0.45) 0px -${Math.floor(viewItem / 2) * itemHeight}px 0px ${Math.floor(viewItem / 2) * itemHeight}px`
        }">
      </div>
      <div
        class="vx-picker--indicator-bottom"
        :style="{
          top: `${Math.floor(viewItem / 2) * itemHeight + itemHeight}px`,
          boxShadow: `rgba(255, 255, 255, 0.45) 0px ${Math.floor(viewItem / 2) * itemHeight}px 0px ${Math.floor(viewItem / 2) * itemHeight}px`
        }">
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, watch, ref } from 'vue'
export default {
  name: 'VxPicker',
  props: {
    options: {
      type: Array,
      reqiured: true
    },
    modelValue: {
      type: String
    },
    placeholder: {
      type: String
    },
    viewItem: {
      type: Number,
      default: 7
    },
    itemHeight: {
      type: Number,
      default () {
        return parseInt(parseInt(document.documentElement.style.fontSize, 10) * 0.9)
      }
    }
  },
  setup (props, { emit }) {
    let el = ref(null)
    const handleTouchStart = e => {
      let node = e.currentTarget
      const handleTouchEnd = () => {
        let timer = null
        node.onscroll = () => {
          timer && clearTimeout(timer)
          timer = setTimeout(() => {
            let index = Math.round(node.scrollTop / props.itemHeight)
            let scrollTop = index * props.itemHeight
            requestAnimationFrame(() => {
              node.onscroll = null
              node.scrollTo({
                top: scrollTop,
                left: 0,
                behavior: 'smooth'
              })
              let item = props.options[props.placeholder ? index - 1 : index]
              emit('update:modelValue', item ? item.value : '')
            })
          }, 500)
        }
      }
      document.addEventListener('touchend', handleTouchEnd, {
        once: true
      })
    }
    const handleResize = () => {
      let index = props.options.findIndex(item => item.value === props.modelValue)
      if (index >= 0) {
        el.value.querySelector('.vx-picker').scrollTop = (props.placeholder ? index + 1 : index) * props.itemHeight
      }
    }
    watch(() => props.itemHeight, () => {
      handleResize()
    })
    onMounted(() => {
      setTimeout(() => {
        handleResize()
      })
    })
    return {
      el,
      handleTouchStart
    }
  }
}
</script>
