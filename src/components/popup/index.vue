<template>
  <div :class="_clas" :style="styles">
    <transition name="popup-fade" v-if="!full">
      <overlay @click="closeHandler" v-if="open"></overlay>
    </transition>
    <transition :name="full?'popup-full-slide-up':'popup-slide-up'" @enter="enterHandler">
      <div :class="[cssPrefix + 'popup-inner',full ? cssPrefix + 'popup-full' : '']" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
import Overlay from '../overlay'
export default {
  mixins: [base],
  components: {
    Overlay
  },
  mounted () {
    if (this.open) {
      this.$el.style.display = 'block'
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'popup', this.clas]
    }
  },
  watch: {
    open (val) {
      if (val) {
        this.$el.style.display = 'block'
        this.$emit('on-open')
      } else {
        setTimeout(() => {
          this.$el.style.display = 'none'
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
    enterHandler () {
      this.$emit('on-enter')
    },
    closeHandler () {
      this.$emit('on-close')
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &popup{
      position:fixed;
      left:0;
      top:0;
      text-align:center;
      width:100%;
      height:100%;
      overflow:hidden;
      z-index: 1000;
      display:none;
      user-select:none;
      &-inner{
        background:#f7f7f7;
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        max-height: 90%;
        overflow: auto;
      }
      &-full{
        height:100%;
        max-height: 100%;
      }
    }
  }
  .popup-slide-up-enter-active, .popup-slide-up-leave-active {
    transition: transform $transition-time
  }
  .popup-slide-up-enter, .popup-slide-up-leave-active {
    transform: translateY(100%);
  }
  
  .popup-full-slide-up-enter-active, .popup-full-slide-up-leave-active {
    transition: transform 0.4s;
  }
  .popup-full-slide-up-enter, .popup-full-slide-up-leave-active {
    transform: translateY(100%);
  }
  
  .popup-fade-enter-active, .popup-fade-leave-active {
    transition: opacity $transition-time
  }
  .popup-fade-enter, .popup-fade-leave-active {
    opacity: 0
  }
</style>
