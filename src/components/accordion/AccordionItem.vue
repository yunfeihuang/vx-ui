<template>
  <div :class="classes">
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
    }
  },
  computed: {
    classes () {
      return ['vx-accordion-item', {
        'is-open': this.myOpen
      }]
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
      this.handleOpen(this.open)
    }
  },
  methods: {
    handleOpen (open, isParentCall) {
      let node = this.$el.querySelector('.vx-accordion-item-bd')
      let height = ''
      if (open) {
        height = node.children[0].offsetHeight + 'px'
      }
      this.myOpen = open
      node.style.height = height
      if (!isParentCall && this.$parent && this.$parent.$options.componentName === 'Accordion') {
        this.$parent.updateChildren(this)
      }
    }
  }
}
</script>
