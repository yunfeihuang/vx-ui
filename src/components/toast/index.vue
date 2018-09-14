<template>
  <div :class="['vx-toast','vx-toast--' + align]">
    <div :class="['vx-toast--inner']">
      <div class="vx-toast--content">
        <template v-if="type != 'default'">
          <spinner v-if="type==='loading'" class="vx-toast--loading" v-bind="spinnerProps"/>
          <i v-else :class="['vx-toast--icon',`vx-toast--${type}`]"></i>
          <br />
        </template>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from '../popup'
import Spinner from '../spinner'

export default {
  componentName: 'Toast',
  components: {
    Popup,
    Spinner
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
      type: String,
      default: 'default'
    },
    destroy: {
      type: Boolean,
      default: false
    },
    spinnerProps: {
      type: Object,
      default () {
        return {
          color: '#999',
          primaryColor: '#fff',
          size: 0.72
        }
      }
    }
  },
  mounted () {
    this.openChange(this.open)
  },
  methods: {
    hide () {
      this.$$timer && clearTimeout(this.$$timer)
      this.$el.style.cssText = 'display:block;opacity:0;'
      requestAnimationFrame(() => {
        this.$el.style.cssText = 'display:none;'
        this.$emit('update:open', false).$emit('close')
        if (this.destroy) {
          this.$destroy()
        }
      })
    },
    openChange (value) {
      if (value) {
        this.$$timer && clearTimeout(this.$$timer)
        requestAnimationFrame(() => {
          this.$el.style.cssText = 'display:block;opacity:0;'
          requestAnimationFrame(() => {
            let width = this.$el.children[0].offsetWidth + 4
            let height = this.$el.children[0].offsetHeight + 4
            requestAnimationFrame(() => {
              this.$el.style.cssText = `display:block;width:${width + 10}px;height:${height + 10}px;`
            })
          })
        })
        if (this.duration) {
          this.$$timer = setTimeout(() => {
            this.hide()
          }, this.duration)
        }
      } else {
        this.hide()
      }
    }
  },
  destroyed () {
    this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
  },
  watch: {
    open (value) {
      this.openChange(value)
    }
  }
}
</script>
