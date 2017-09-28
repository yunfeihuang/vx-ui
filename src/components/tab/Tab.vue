<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
    <div :class="[cssPrefix+'tab-underline']"></div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { tab } from 'utils/mixins.js'
export default {
  mixins: [tab],
  props: ['underlineWidth'],
  computed: {
    classes () {
      return ['flexbox', cssPrefix + 'tab']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  updated () {
    this.computedStyle()
  },
  methods: {
    afterMounted () {
      this.computedStyle()
    },
    computedStyle () {
      this.$nextTick(() => {
        let node = this.$el.querySelector('.' + cssPrefix + 'tab-underline')
        let activeNode = this.$el.querySelector('.' + cssPrefix + 'tab-item-active')
        let activeWidth = activeNode.offsetWidth
        let width = activeWidth
        let left = activeNode.offsetLeft
        if (this.underlineWidth === 'auto' || this.underlineWidth === 0) {
          width = activeNode.children[0].offsetWidth
          left = activeNode.offsetLeft + (activeWidth - width) / 2
        } else if (this.underlineWidth) {
          width = this.underlineWidth
          left = activeNode.offsetLeft + (activeWidth - this.underlineWidth) / 2
        }
        requestAnimationFrame(() => {
          node.style.cssText = `width: ${width}px;left:${left}px;display:block`
        })
      })
    },
    changeHandler (value) {
      if (value !== this.active) {
        this.$emit('on-change', value).$emit('update:active', value)
        this.computedStyle()
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &tab{
      text-align:center;
      position:relative;
      user-select: none;
      line-height: 0.9rem;
      &:before{
        @include divider;
      }
      &-underline{
        position:absolute;
        bottom:0;
        left:0;
        width:100px;
        border-bottom:2px solid $primary-color;
        transition: left $transition-time $ease-in-out,width $transition-time $ease-in-out;
        display:none;
      }
    }
  }
</style>
