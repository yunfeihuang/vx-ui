<template>
  <div class="vx-toast">
    <div :class="['vx-toast-inner','vx-toast-' + this.align]">
      <div :class="['vx-toast-content']">
        <template v-if="type != 'default'">
          <icon v-if="type === 'success'">&#xe654;</icon>
          <icon v-else-if="type === 'warn'">&#xe653;</icon>
          <icon v-else-if="type === 'fail'">&#xe605;</icon>
          <spinner v-else-if="type==='loading'" class="vx-toast-spinner" v-bind="spinnerProps"/>
          <br v-if="iconCode[type] || type==='loading'" />
        </template>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from '../popup'
import Spinner from '../spinner'
import Icon from '../icon'

export default {
  componentName: 'Toast',
  components: {
    Popup,
    Spinner,
    Icon
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
          primaryColor: '#fff'
        }
      }
    },
    iconCode: {
      type: Object,
      default () {
        return {
          success: '&#xe654;',
          warn: '&#xe653;',
          fail: '&#xe605;'
        }
      }
    }
  },
  mounted () {
    this.openChange(this.open)
  },
  methods: {
    openChange (value) {
      if (value) {
        requestAnimationFrame(() => {
          this.$el.style.display = 'table'
        })
        this.duration && setTimeout(() => {
          requestAnimationFrame(() => {
            this.$el.style.display = 'none'
            this.$emit('update:open', false).$emit('close')
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
      this.$el.parentNode.removeChild(this.$el)
    })
  },
  watch: {
    open (value) {
      this.openChange(value)
    }
  }
}
</script>
