<template>
  <div :class="classes" onselectstart="return false;">
    <slot></slot>
    <div :class="[cssPrefix+'tab-underline']" :style="lineStyle"></div>
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
      let underline = this.$el.querySelector('.' + cssPrefix + 'tab-underline')
      underline && requestAnimationFrame(() => {
        underline.style.display = 'block'
      })
    },
    changeHandler (value) {
      this.$emit('click', value)
      if (value !== this.active) {
        this.$emit('on-change', value)
        this.$emit('input', value)
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
      line-height: 2.6rem;
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
