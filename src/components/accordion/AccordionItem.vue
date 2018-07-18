<template>
  <div :class="['vx-accordion-item', {'is-open': myOpen}]">
    <div class="vx-accordion-item-hd" @click="handleOpen(!myOpen)">
      <div class="vx-accordion-item-title">
        <slot v-if="$slots.title"></slot>
        <template v-else>
          {{title}}
        </template>
      </div>
      <arrow direction="down" />
    </div>
    <div class="vx-accordion-item-bd">
      <div class="vx-accordion-item-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../arrow'
export default {
  componentName: 'AccordionItem',
  components: {
    Arrow
  },
  props: {
    open: {
      type: Boolean
    },
    title: {
      type: String,
      default: 'title'
    },
    duration: {
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      myOpen: this.open
    }
  },
  watch: {
    open (value) {
      this.myOpen = value
      this.handleOpen(value)
    }
  },
  mounted () {
    if (this.open) {
      let node = this.$el.querySelector('.vx-accordion-item-bd')
      node.style.height = 'auto'
      this.handleOpen(true)
    }
    window.addEventListener('resize', this.handleResize, false)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      let node = this.$el.querySelector('.vx-accordion-item-bd')
      if (node.style.height) {
        node.style.height = 'auto'
        let height = node.offsetHeight
        requestAnimationFrame(() => {
          node.style.height = height + 'px'
        })
      }
    },
    handleOpen (open) {
      let node = this.$el.querySelector('.vx-accordion-item-bd')
      let height = ''
      if (open) {
        height = node.children[0].offsetHeight + 'px'
      }
      this.myOpen = open
      let self = this
      this.$nextTick(() => {
        let parentNode = self.$el.parentNode
        if (parentNode && parentNode.children) {
          Array.from(parentNode.children).forEach(item => {
            if (item.classList.contains('vx-accordion-item') && item !== self.$el) {
              item.querySelector('.vx-accordion-item-bd').style.height = ''
            }
          })
        }
        node.style.height = height
      })
    }
  }
}
</script>
