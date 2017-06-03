<template>
  <div :class="classes">
    <div :class="[cssPrefix+'range-mask']"></div>
    <div :class="[cssPrefix+'range-value']" ></div>
    <div :class="[cssPrefix+'range-button']" @mousedown="touchStartHandler" @touchstart="touchStartHandler">
      <div :class="[cssPrefix+'range-tips']">0</div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
export default {
  mixins: [input],
  computed: {
    classes () {
      let array = [cssPrefix + 'range-wrapper']
      if (this.disabled) {
        array.push(cssPrefix + 'range-disabled')
      }
      return array
    },
    offsetLeft () {
      return {
        left: this.value / this.max * this.$el.offsetWidth + 'px'
      }
    },
    offsetWidth () {
      return {
        width: this.value / this.max * this.$el.offsetWidth + 'px'
      }
    },
    myValue () {
      if (this.value < this.min) {
        return this.min
      }
      if (this.value > this.max) {
        return this.max
      }
      return this.value
    },
    range () {
      return this.max - this.min
    },
    stepRate () {
      return 1 / this.step
    }
  },
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  mounted () {
    let left = (this.myValue - this.min) / this.range * this.$el.offsetWidth
    let valueDom = this.$el.querySelector('.' + cssPrefix + 'range-value')
    let buttonDom = this.$el.querySelector('.' + cssPrefix + 'range-button')
    let tipsDom = this.$el.querySelector('.' + cssPrefix + 'range-tips')
    valueDom.style.width = buttonDom.style.left = left + 'px'
    tipsDom.innerHTML = Math.round(this.myValue * this.stepRate) / this.stepRate
  },
  methods: {
    changeHandler (val) {
      this.$emit('on-change', val)
      this.$emit('input', val)
    },
    touchStartHandler (e) {
      e.preventDefault()
      if (!this.disabled) {
        let position = this.getPosition(e)
        let button = e.target
        let start = true
        let buttonLeft = button.style.left
        let touch = Object.assign({
          left: buttonLeft ? parseFloat(buttonLeft) : 0,
          maxLeft: this.$el.querySelector('.' + cssPrefix + 'range-mask').offsetWidth - button.offsetWidth
        }, position)
        let valueDom = this.$el.querySelector('.' + cssPrefix + 'range-value')
        let tipsDom = this.$el.querySelector('.' + cssPrefix + 'range-tips')
        tipsDom.style.display = 'block'
        let self = this
        let value = this.myValue
        let touchMoveHandler = (event) => {
          if (start) {
            let movePosition = self.getPosition(event)
            let left = movePosition.pageX - position.pageX + touch.left
            left = left < 0 ? 0 : left
            left = left > touch.maxLeft ? touch.maxLeft : left
            buttonLeft = left
            button.style.left = valueDom.style.width = left + 'px'
            tipsDom.innerHTML = value = Math.round((buttonLeft / touch.maxLeft * this.range + this.min) * this.stepRate) / this.stepRate
            event.preventDefault()
          }
        }
        let touchEndHandler = () => {
          document.removeEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', touchMoveHandler)
          document.removeEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', touchEndHandler)
          start = false
          tipsDom.style.display = 'none'
          self.changeHandler(value)
        }
        document.addEventListener(document.ontouchmove !== undefined ? 'touchmove' : 'mousemove', touchMoveHandler, false)
        document.addEventListener(document.ontouchend !== undefined ? 'touchend' : 'mouseup', touchEndHandler, false)
      }
    },
    getPosition (e) {
      return {
        pageX: e.changedTouches ? e.changedTouches[0].pageX : e.pageX,
        pageY: e.changedTouches ? e.changedTouches[0].pageY : e.pageY
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &range{
      &-wrapper{
        height:2.6rem;
        position:relative;
        min-width:100px;
      }
      &-disabled{
        opacity: 0.6;
        pointer-events: none;
      }
      &-mask{
        @include divider(#ccc);
        z-index:1;
        top:50%;
      }
      &-value{
        @include divider($primary-color);
        width:0;
        z-index:2;
        top:50%;
      }
      &-button{
        border:0;
        height:34px;
        width:34px;
        border-radius:50%;
        background:#fff;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
        position:absolute;
        top:50%;
        left:0;
        margin:-17px 0;
        z-index:100;
      }
      &-tips{
        position:absolute;
        left:50%;
        bottom:100%;
        background:rgba(0,0,0,0.6);
        color:#fff;
        padding:5px;
        line-height:100%;
        border-radius:3px;
        margin-bottom:8px;
        transform:translateX(-50%);
        min-width:20px;
        text-align:center;
        display:none;
        &:before{
          content:'';
          position:absolute;
          border:4px solid transparent;
          border-top-color:rgba(0,0,0,0.6);
          left:50%;
          top:100%;
          margin-left:-4px;
        }
      }
    }
    
  }
</style>
