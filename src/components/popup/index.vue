<template>
  <div :class="classes">
    <transition name="popup-fade" v-if="!full">
      <overlay @click="closeHandler" v-if="open"></overlay>
    </transition>
    <transition :name="full?'popup-full-slide-'+direction:'popup-slide-'+direction" @enter="enterHandler">
      <div :class="[cssPrefix + 'popup-inner',cssPrefix + 'popup-'+direction,full ? cssPrefix + 'full' : '']" v-if="open">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Overlay from '../overlay'
export default {
  components: {
    Overlay
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
    full: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'down'
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'popup']
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
        background:#fff;
        position:absolute;
        overflow: auto;
      }
      &-up{
        top:0;
        left:0;
        width:100%;
        max-height: 90%;
        &.#{$css-prefix}full{
          height:100%;
          max-height: 100%;
        }
      }
      &-down{
        bottom:0;
        left:0;
        width:100%;
        max-height: 90%;
        &.#{$css-prefix}full{
          height:100%;
          max-height: 100%;
        }
      }
      &-left{
        top:0;
        left:0;
        height:100%;
        max-width: 80%;  
        &.#{$css-prefix}full{
          width:100%;
          max-width: 100%;
        }
      }
      &-right{
        top:0;
        right:0;
        height:100%;
        max-width: 80%;
        &.#{$css-prefix}full{
          width:100%;
          max-width: 100%;
        }
      }
      &-center{
        top:0;
        left:0;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content: center;
        background: transparent;
        &.#{$css-prefix}full{
          display:block;
          background:#fff;
        }
      }
    }
  }
  
  .popup-fade-enter-active, .popup-fade-leave-active {
    transition: opacity $transition-time
  }
  .popup-fade-enter, .popup-fade-leave-active {
    opacity: 0
  }
  
  .popup-slide-up-enter-active, .popup-slide-up-leave-active {
    transition: transform $transition-time
  }
  .popup-slide-up-enter, .popup-slide-up-leave-active {
    transform: translateY(-100%);
  }
  .popup-full-slide-up-enter-active, .popup-full-slide-up-leave-active {
    transition: transform 0.4s;
  }
  .popup-full-slide-up-enter, .popup-full-slide-up-leave-active {
    transform: translateY(-100%);
  }
  
  .popup-slide-down-enter-active, .popup-slide-down-leave-active {
    transition: transform $transition-time
  }
  .popup-slide-down-enter, .popup-slide-down-leave-active {
    transform: translateY(100%);
  }
  .popup-full-slide-down-enter-active, .popup-full-slide-down-leave-active {
    transition: transform 0.4s;
  }
  .popup-full-slide-down-enter, .popup-full-slide-down-leave-active {
    transform: translateY(100%);
  }
  
  .popup-slide-left-enter-active, .popup-slide-left-leave-active {
    transition: transform $transition-time
  }
  .popup-slide-left-enter, .popup-slide-left-leave-active {
    transform: translateX(-100%);
  }
  .popup-full-slide-left-enter-active, .popup-full-slide-left-leave-active {
    transition: transform 0.4s;
  }
  .popup-full-slide-left-enter, .popup-full-slide-left-leave-active {
    transform: translateX(-100%);
  }
  
  .popup-slide-right-enter-active, .popup-slide-right-leave-active {
    transition: transform $transition-time
  }
  .popup-slide-right-enter, .popup-slide-right-leave-active {
    transform: translateX(100%);
  }
  .popup-full-slide-right-enter-active, .popup-full-slide-right-leave-active {
    transition: transform 0.4s;
  }
  .popup-full-slide-right-enter, .popup-full-slide-right-leave-active {
    transform: translateX(100%);
  }
  
  .popup-slide-center-enter-active, .popup-slide-center-leave-active {
    transition: opacity $transition-time
  }
  .popup-slide-center-enter, .popup-slide-center-leave-active {
    transform: 0;
  }
  .popup-full-slide-center-enter-active, .popup-full-slide-center-leave-active {
    transition: opacity 0.4s;
  }
  .popup-full-slide-center-enter, .popup-full-slide-center-leave-active {
    transform: 0;
  }
</style>
