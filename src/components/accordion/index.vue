<template>
  <div :class="classes">
    <div class="vx-accordion-hd" @click="handleOpen">
      <div class="vx-accordion-title">
        <slot v-if="$slots.title"></slot>
        <template v-else>
          {{title}}
        </template>
      </div>
      <arrow direction="down" />
    </div>
    <div class="vx-accordion-bd">
      <div class="vx-accordion-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Arrow from '../arrow'
export default {
  componentName: 'Accordion',
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
      return ['vx-accordion', {
        'is-open': this.myOpen
      }]
    }
  },
  data () {
    return {
      myOpen: this.open
    }
  },
  mounted () {
    if (this.open) {
      let node = this.$el.querySelector('.vx-accordion-bd')
      node.style.height = node.children[0].clientHeight + 'px'
    }
  },
  methods: {
    handleOpen () {
      let node = this.$el.querySelector('.vx-accordion-bd')
      let height = ''
      if (!this.myOpen) {
        height = node.children[0].clientHeight + 'px'
      }
      this.myOpen = !this.myOpen
      node.style.height = height
    }
  }
}
</script>
