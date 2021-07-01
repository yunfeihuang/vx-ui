<template>
  <div ref="el" class="vx-picker--wrapper" onselectstart="return false;">
    <div :class="['vx-picker--header']">
      <button type="button" class="vx-picker--cancel" @click="handleCancel">{{cancelText}}</button>
      <div :class="['vx-picker--placeholder']">{{placeholder}}</div>
      <button type="button" class="vx-picker--confirm" @click="handleConfirm">{{confirmText}}</button>
    </div>
    <div class="vx-picker--body">
      <div class="vx-picker--columns">
        <div
          v-for="(column, i) in columns"
          :key="i"
          :class="{'is-touch': isTouch}"
          class="vx-picker"
          :style="`height:${rows * rowHeight}px`"
          @touchstart="handleTouchStart($event, i)"
          @scroll="handleScroll($event, i)">
          <div class="vx-picker--scroller" :style="`padding:${Math.floor(rows / 2) * rowHeight}px 0`">
            <div
              v-for="(item, index) in column"
              :style="`height:${rowHeight}px;line-height:${rowHeight}px`"
              :class="['vx-picker--item',{'is-active' : item.value === modelValue}]"
              v-html="item.label"
              :key="index">
            </div>
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
  </div>
</template>

<script>
import { onMounted, watch, ref, nextTick } from 'vue'
export default {
  name: 'VxPicker',
  props: {
    columns: {
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
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  setup (props, { emit }) {
    const el = ref(null)
    const isTouch = document.ontouchstart !== undefined
    let timer = null
    const handleScroll = (e, i) => {
      let node = el.value.querySelectorAll('.vx-picker')[i]
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
          let item = props.columns[i][index]
          let modelValue = [...props.modelValue]
          modelValue[i] = item.value
          emit('update:modelValue', modelValue)
          emit('change', {
            index: i,
            value: item.value
          })
        })
      }, 200)
    }
    const handleTouchStart = (e, i) => {
      timer && clearTimeout(timer)
      let node = e.currentTarget
      const handleTouchEnd = () => {
        node.onscroll = () => {
          handleScroll(e, i)
        }
        handleScroll(e, i)
      }
      document.addEventListener('touchend', handleTouchEnd, {
        once: true
      })
    }
    const handleResize = (modelValue = props.modelValue) => {
      if (modelValue) {
        Array.from(el.value.querySelectorAll('.vx-picker')).forEach((node,i) => {
          let index = props.columns[i].findIndex(item => item.value === modelValue[i])
          node.scrollTop = index * props.rowHeight
        })
      }
    }
    watch(() => props.rowHeight, () => {
      handleResize()
    })
    watch(() => props.modelValue, val => {
      nextTick(() => {
        handleResize(val)
      })
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
      handleScroll (e, i) {
        if (!isTouch) {
          handleScroll(e, i)
        }
      },
      handleConfirm () {
        emit('confirm', props.modelValue)
      },
      handleCancel () {
        emit('cancel')
      }
    }
  }
}
</script>
