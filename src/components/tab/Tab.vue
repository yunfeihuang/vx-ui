<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
    <div :class="[cssPrefix+'tab-line']" :style="lineStyle"></div>
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
      return [cssPrefix + 'tab']
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
      let tabLine = this.$el.querySelector('.' + cssPrefix + 'tab-line')
      tabLine && requestAnimationFrame(() => {
        tabLine.style.display = 'block'
      })
    },
    changeHandler (val) {
      this.$emit('click', val)
      if (val !== this.active) {
        this.$emit('on-change', val)
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
      display:flex;
      text-align:center;
      position:relative;
      user-select: none;
      line-height: 100%;
      &:before{
        @include divider;
      }
      &-line{
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
