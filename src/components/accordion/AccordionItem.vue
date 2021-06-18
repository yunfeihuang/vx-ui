<template>
  <div :class="['vx-accordion--item', {'is-open': keys.indexOf(name) > -1}]">
    <div class="vx-accordion--item-hd" @click="handleOpen">
      <div class="vx-accordion--item-title">
        <slot v-if="$slots.title"></slot>
        <template v-else>
          {{title}}
        </template>
      </div>
      <vx-arrow direction="down" />
    </div>
    <transition name="accordion-slide" @enter="handleEnter">
      <div v-show="keys.indexOf(name) > -1" class="vx-accordion--item-bd" ref="content">
        <div class="vx-accordion--item-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { inject, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import VxArrow from '../arrow'

export default {
  name: 'VxAccordionItem',
  components: {
    VxArrow
  },
  props: {
    open: {
      type: Boolean
    },
    title: {
      type: String
    }
  },
  setup (props) {
    const vxAccordion = inject('vxAccordion')
    if (vxAccordion) {
      const name = ref(Math.random().toString(36).substr(2))
      const content = ref(null)
      watch(() => props.open, val => {
        if (val) {
          vxAccordion.open(name.value)
        } else {
          vxAccordion.close(name.value)
        }
      })
      const handleEnter = (node) => {
        requestAnimationFrame(() => {
          node.style.height = node.children[0].offsetHeight + 'px'
        })
      }
      const handleResize = () => {
        if (vxAccordion.keys.indexOf(name) > -1) {
          handleEnter(content.value)
        }
      }
      onMounted(() => {
        window.addEventListener('resize', handleResize, false)
        props.open && vxAccordion.open(name.value)
      })
      onBeforeUnmount(() => {
        window.removeEventListener('resize', handleResize)
      })
      return {
        keys: vxAccordion.keys,
        name,
        content,
        handleOpen () {
          vxAccordion.open(name.value)
        },
        handleEnter,
        handleResize
      }
    }
  }
}
</script>
