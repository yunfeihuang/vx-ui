<template>
  <popup :open="open" @on-close="closeHandler" @on-enter="enterHandler">
    <div :class="[cssPrefix + 'actionsheet-inner']" onselectstart="return false;">
      <div :class="[cssPrefix + 'actionsheet-item-list']">
        <slot></slot>
      </div>
      <div v-if="cancel" :class="cssPrefix + 'actionsheet-cancel'" @click="closeHandler">
        {{cancelText}}
      </div>
    </div>
  </popup>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Popup from '../popup'
export default {
  components: {
    Popup
  },
  mounted () {
    if (this.open) {
      requestAnimationFrame(() => {
        this.$el.style.display = 'block'
      })
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number]
    },
    cancel: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'actionsheet']
    }
  },
  watch: {
    open (val) {
      if (val) {
        requestAnimationFrame(() => {
          this.$el.style.display = 'block'
          this.$emit('on-open')
        })
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.display = 'none'
          })
        }, 300)
      }
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    menuHandler (value) {
      this.$emit('on-close')
      this.$emit('on-menu', value)
    },
    closeHandler () {
      this.$emit('on-close')
    },
    enterHandler () {
      if (!this.$children) return
      this.$children[0].$children.forEach((item) => {
        if (item.$el.className.indexOf('overlay') === -1) {
          item.$off('click').$on('click', this.menuHandler)
          item.value === this.value && (item.checked = true)
        }
      })
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &actionsheet{
      &-inner{
        background:#fff;
        max-height: 90%;
        overflow: auto;
      }
      &-cancel{
        padding: $item-padding;
        border-top:10px solid #eee;
        color:$sub-color;
      }
    }
  }
</style>
