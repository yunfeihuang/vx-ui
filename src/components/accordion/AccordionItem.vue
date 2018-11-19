<template>
  <div :class="['vx-accordion--item', {'is-open': myOpen}]">
    <div class="vx-accordion--item-hd" @click="handleOpen">
      <div class="vx-accordion--item-title">
        <slot v-if="$slots.title"></slot>
        <template v-else>
          {{title}}
        </template>
      </div>
      <arrow direction="down" />
    </div>
    <transition name="accordion-slide" @enter="handleEnter">
      <div v-show="myOpen" class="vx-accordion--item-bd">
        <div class="vx-accordion--item-content">
          <slot></slot>
        </div>
      </div>
    </transition>
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
      type: String
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
    }
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, false)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      if (this.open) {
        let node = this.$el.querySelector('.vx-accordion--item-bd')
        requestAnimationFrame(() => {
          node.style.height = node.children[0].offsetHeight + 'px'
        })
      }
    },
    handleEnter (node) {
      requestAnimationFrame(() => {
        node.style.height = node.children[0].offsetHeight + 'px'
      })
    },
    handleOpen () {
      this.myOpen = !this.myOpen
      let self = this
      if (this.$parent.mutex) {
        this.$parent.$children.forEach(item => {
          if (item !== self) {
            item.myOpen = false
          }
        })
      }
    }
  }
}
</script>
