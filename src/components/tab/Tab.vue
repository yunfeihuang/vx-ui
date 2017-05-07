<template>
  <div :class="_clas" :style="style" onselectstart="return false;">
    <slot></slot>
    <div :class="[cssPrefix+'tab-line']" :style="lineStyle"></div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
export default {
  mixins: [base, {
    mounted () {
      if (!this.$children) return
      this.childLength = this.$children.length
      this.$children.forEach((item, i) => {
        this.$children[i].$on('on-change', this.changeHandler)
        item.index = i
        item.active = item.index === this.active
      })
      requestAnimationFrame(() => {
        this.$el.querySelector('.' + cssPrefix + 'tab-line').style.display = 'block'
      })
    },
    props: {
      active: {
        type: Number,
        default: 0
      }
    },
    watch: {
      active (val, oldVal) {
        this.$children[oldVal].active = false
        this.$children[val].active = true
      }
    }
  }],
  computed: {
    lineStyle () {
      return {
        left: `${this.active * (100 / this.childLength)}%`,
        width: `${100 / this.childLength}%`
      }
    },
    _clas () {
      return [cssPrefix + 'tab', this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      childLength: this.$children.length
    }
  },
  methods: {
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
