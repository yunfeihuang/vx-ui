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
  computed: {
    lineStyle () {
      return {
        left: `${this.active * (100 / this.childLength)}%`,
        width: `${100 / this.childLength}%`
      }
    },
    classes () {
      return ['flexbox', cssPrefix + 'tab']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      childLength: this.$children.length
    }
  },
  methods: {
    afterMounted () {
      this.computedStyle()
    },
    computedStyle () {
      this.$nextTick(() => {
        let node = this.$el.querySelector('.' + cssPrefix + 'tab-underline')
        let activeNode = this.$el.querySelector('.' + cssPrefix + 'tab-item-active')
        requestAnimationFrame(() => {
          node.style.cssText = `width: ${activeNode.offsetWidth}px;left:${activeNode.offsetLeft}px;display:block`
        })
      })
    },
    changeHandler (value) {
      if (value !== this.active) {
        this.$emit('on-change', value).$emit('input', value).$emit('update:active', value)
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
        border-bottom:1px solid $primary-color;
        transition: left $transition-time $ease-in-out;
        display:none;
      }
    }
  }
</style>
