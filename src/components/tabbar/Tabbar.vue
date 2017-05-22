<template>
  <div :class="classes" :style="styles" onselectstart="return false;">
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
import Divider from '../divider'
export default {
  components: {
    Divider
  },
  mixins: [base, {
    mounted () {
      if (!this.$children) return
      this.childLength = this.$children.length
      this.$children.forEach((item, i) => {
        this.$children[i].$on('on-change', this.changeHandler)
        item.index = i
        item.active = item.index === this.active
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
    classes () {
      return [cssPrefix + 'tabbar', this.clas]
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
    &tabbar{
      display:flex;
      text-align:center;
      position:relative;
      user-select: none;
      background: #fff;
      &:before{
        @include divider;
        top:0;
      }
    }
  }
</style>
