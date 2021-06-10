<template>
  <div :class="['vx-accordion--item', {'is-open': $parent.value.indexOf(name) > -1}]">
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
      <div v-show="$parent.value.indexOf(name) > -1" class="vx-accordion--item-bd">
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
  name: 'VxAccordionItem',
  components: {
    Arrow
  },
  props: {
    open: {
      type: Boolean
    },
    title: {
      type: String
    },
    name: {
      type: String,
      default () {
        return Math.random().toString(36).substr(2)
      }
    }
  },
  watch: {
    open (value) {
      if (value) {
        this.$parent.open(this.name)
      } else {
        this.$parent.close(this.name)
      }
    }
  },
  beforeMount () {
    this.open && this.$parent.open(this.name)
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, false)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      if (this.$parent.value.indexOf(this.name) > -1) {
        let node = this.$el.querySelector('.vx-accordion--item-bd')
        this.handleEnter(node)
      }
    },
    handleEnter (node) {
      requestAnimationFrame(() => {
        node.style.height = node.children[0].offsetHeight + 'px'
      })
    },
    handleOpen () {
      this.$parent.open(this.name)
    }
  }
}
</script>
