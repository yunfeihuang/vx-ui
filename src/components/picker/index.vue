<template>
  <div ref="el" class="vx-picker--wrapper" onselectstart="return false;">
    <div
      :class="{'is-touch': isTouch}"
      class="vx-picker"
      :style="`height:${rows * rowHeight}px`"
      @touchstart="handleTouchStart"
      @scroll="handleScroll">
      <div class="vx-picker--scroller" :style="`padding:${Math.floor(rows / 2) * rowHeight}px 0`">
        <div :style="`height:${rowHeight}px;line-height:${rowHeight}px`" v-if="placeholder" :class="['vx-picker--item','vx-picker--placeholder']">
          {{placeholder}}
        </div>
        <div
          v-for="(item, index) in options"
          :style="`height:${rowHeight}px;line-height:${rowHeight}px`"
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
          top: `${Math.floor(rows / 2) * rowHeight}px`,
          boxShadow: `rgba(255, 255, 255, 0.45) 0px -${Math.floor(rows / 2) * rowHeight}px 0px ${Math.floor(rows / 2) * rowHeight}px`
        }">
      </div>
      <div
        class="vx-picker--indicator-bottom"
        :style="{
          top: `${Math.floor(rows / 2) * rowHeight + rowHeight}px`,
          boxShadow: `rgba(255, 255, 255, 0.45) 0px ${Math.floor(rows / 2) * rowHeight}px 0px ${Math.floor(rows / 2) * rowHeight}px`
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
    rows: {
      type: Number,
      default: 7
    },
    rowHeight: {
      type: Number,
      default () {
        return parseInt(parseInt(document.documentElement.style.fontSize, 10) * 0.9)
      }
    }
  },
  setup (props, { emit }) {
    const el = ref(null)
    const isTouch = document.ontouchstart !== undefined
    let timer = null
    let node = null
    const handleScroll = (e) => {
      node = e.target
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        let index = Math.round(node.scrollTop / props.rowHeight)
        let scrollTop = index * props.rowHeight
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
      }, 200)
    }
    const handleTouchStart = e => {
      timer && clearTimeout(timer)
      let node = e.currentTarget
      const handleTouchEnd = () => {
        node.onscroll = handleScroll
      }
      document.addEventListener('touchend', handleTouchEnd, {
        once: true
      })
    }
    const handleResize = () => {
      node = el.value.querySelector('.vx-picker')
      let index = props.options.findIndex(item => item.value === props.modelValue)
      if (index >= 0) {
        node.scrollTop = (props.placeholder ? index + 1 : index) * props.rowHeight
      }
    }
    watch(() => props.rowHeight, () => {
      handleResize()
    })
    onMounted(() => {
      setTimeout(() => {
        handleResize()
      })
    })
    return {
      el,
      isTouch,
      handleTouchStart,
      handleScroll (e) {
        if (!isTouch) {
          handleScroll(e)
        }
      }
    }
  }
}
</script>
