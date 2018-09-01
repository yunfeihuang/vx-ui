<template>
  <button :class="classes" :type="nativeType">
    <spinner v-if="loading" :primary-color="loadingColor[type]"/>
    <span><slot></slot></span>
    <ripple v-if="ripple" :color="rippleColor" />
  </button>
</template>

<script>
import { button } from 'utils/mixins'
import Spinner from '../spinner'
import Ripple from '../ripple'

export default {
  componentName: 'XButton',
  components: {
    Spinner,
    Ripple
  },
  mixins: [button],
  props: {
    rippleColor: {
      type: String
    }
  },
  computed: {
    classes () {
      return [
        'vx-btn',
        'vx-btn-' + this.type,
        'vx-btn-size-' + this.size,
        {
          'is-plain': this.plain,
          'is-ripple': this.ripple,
          'is-disabled': this.disabled || this.loading
        }
      ]
    }
  },
  mounted () {
    if ((this.type === 'default' || this.plain) && this.size === 'default') {
      let {width, height} = this.$el.style
      this.$$initStyle = {width, height}
      this.$nextTick(this.updateSize)
      window.addEventListener('resize', this.updateSize)
    }
  },
  destroyed () {
    if ((this.type === 'default' || this.plain) && this.size === 'default') {
      window.removeEventListener('resize', this.updateSize)
    }
  },
  updated () {
    if ((this.type === 'default' || this.plain) && this.size === 'default') {
      this.$nextTick(this.updateSize)
    }
  },
  methods: {
    updateSize () {
      requestAnimationFrame(() => {
        this.$el.style.width = this.$$initStyle.width || ''
        this.$el.style.height = this.$$initStyle.height || ''
        let {offsetWidth, offsetHeight} = this.$el
        requestAnimationFrame(() => {
          this.$el.style.width = `${offsetWidth + 1}px`
          this.$el.style.height = `${offsetHeight}px`
        })
      })
    }
  }
}
</script>
