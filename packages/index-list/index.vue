<template>
  <div class="vx-index-list" ref="el">
    <div class="vx-index-list--each" @scroll="handleScroll">
      <template v-for="(group, i) in data" :key="i">
        <div class="vx-index-list--group">
          <div class="vx-index-list--title">{{group.label}}</div>
          <div class="vx-index-list--item" v-for="(item, index) in group.options" :key="index"  @click="handleClick(item)">
            <slot v-if="$slots.default" v-bind="item"></slot>
            <template v-else>{{item.label}}</template>
          </div>
        </div>
      </template>
    </div>
    <div class="vx-index-list--nav">
      <div v-for="(item, index) in navs" :key="index" :class="{'is-active': index === active}" @click="handleGroup(index)">{{item}}</div>
    </div>
  </div>
</template>
<script>
import { ref, watch, onUnmounted, onMounted } from 'vue'
export default {
  name: 'VxIndexList',
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  setup (props) {
    const el = ref(null)
    const navs = ref(props.data.map(item => {
      return item.label.charAt(0)
    }))
    watch(() => props.data, val => {
      navs.value = val.map(item => {
        return item.label.charAt(0)
      })
    })
    const active = ref(0)
    let timer = null
    const handleScroll = () => {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        const rect = el.value.getBoundingClientRect()
        let i = null
        Array.from(el.value.querySelectorAll('.vx-index-list--title')).forEach((node, index) => {
          if (node.getBoundingClientRect().top === rect.top) {
            i = index
          }
        })
        if (i !== null) {
          active.value = i
        }
      }, 500)
    }
    onMounted(() => {
      window.addEventListener('resize', handleScroll, false)
    })
    onUnmounted(() => {
      window.removeEventListener('resize', handleScroll, false)
    })
    return {
      el,
      navs,
      active,
      handleGroup (index) {
        let node = el.value.querySelectorAll('.vx-index-list--group')[index]
        node && node.scrollIntoView({behavior: 'smooth'})
      },
      handleScroll,
      handleClick (value) {
        this.$emit('choose', value)
      }
    }
  }
}
</script>
