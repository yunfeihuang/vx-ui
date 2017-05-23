<template>
  <div :class="classes" :style="styles">
    <div :class="[cssPrefix + 'toast-inner',cssPrefix + 'toast-' + this.align]">
      <div :class="[cssPrefix + 'toast-content']">
        <template v-if="type">
          <i v-if="type==='success'" v-html="iconCode[type]" class="iconfont"></i>
          <br/>
        </template>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
import Popup from '../popup'

const iconCode = {
  success: '&#xe654;',
  warn: '&#xe653;',
  fail: '&#xe605;',
  loading: '&#xe609;'
}

export default {
  mixins: [base],
  components: {
    Popup
  },
  mounted () {
    this.openChange(this.open)
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'top'
    },
    duration: {
      type: Number,
      default: 2000
    },
    type: {
      type: String
    },
    destroy: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'toast', this.clas]
    }
  },
  methods: {
    openChange (val) {
      if (val) {
        requestAnimationFrame(() => {
          this.$el.style.display = 'table'
        })
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.display = 'none'
            this.$emit('on-close')
            if (this.destroy) {
              this.$destroy()
            }
          })
        }, this.duration)
      }
    }
  },
  destroyed () {
    requestAnimationFrame(() => {
      this.$el.remove()
    })
  },
  watch: {
    open (val) {
      this.openChange(val)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      iconCode: iconCode
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &toast{
      z-index:1001;
      position:fixed;
      width: 100%;
      height:100%;
      text-align: center;
      display:none;
      top:0;
      left:0;
      &-inner{
        display:table-cell;
      }
      &-content{
        background:rgba(0,0,0,0.7);
        color:#fff;
        padding: 0.7rem;
        border-radius:3px;
        box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
        display:inline-block;
        word-break: break-all;
        box-sizing: border-box;
        max-width: 80%;
      }
      &-top{
        padding-top:20%;
      }
      &-bottom{
        vertical-align: bottom;
        padding-bottom:20%;
      }
      &-center{
        vertical-align: middle;
      }
      .iconfont{
        font-size:40px;
        margin-bottom:5px;
      }
    }
  }
</style>
