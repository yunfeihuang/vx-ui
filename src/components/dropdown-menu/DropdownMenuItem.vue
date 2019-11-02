<template>
  <flexbox-item :class="['vx-dropdown-menu--item', {'is-checked': checked}]" @click.native="handleClick($event)">
    <div class="vx-dropdown-menu--item-text">
      {{myLabel}}<arrow v-if="options || $slots['default']" :direction="open ? 'up' : 'down'" />
    </div>
  </flexbox-item>
</template>

<script>
import Vue from 'vue'
import Picker from './Picker'
import Arrow from '../arrow'

export default {
  name: 'DropdownMenuItem',
  componentName: 'DropdownMenuItem',
  components: {
    Arrow
  },
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    label: {
      type: String
    },
    options: {
      type: Array
    },
    value: {
      type: [String, Number]
    },
    checked: {
      type: Boolean
    },
    popupClass: {
      type: [String, Array, Object]
    }
  },
  computed: {
    myLabel () {
      if (this.options) {
        let result = this.options.filter(item => item.value === this.value)
        if (result && result[0] && result[0].label) {
          return result[0].label
        }
      }
      return this.label || this.placeholder
    }
  },
  data () {
    return {
      open: false
    }
  },
  destroyed () {
    if (this.__popup) {
      if (this.$root.__popup === this.__popup) {
        this.$root.__popup = null
      }
      this.__popup.$destroy()
    }
  },
  methods: {
    close () {
      this.__popup.open = this.open = !this.__popup.open
    },
    handleClick () {
      if (this.options || this.$slots['default']) {
        let el = document.createElement('div')
        let self = this
        let rect = this.$el.getBoundingClientRect()
        if (!this.__popup || (this.__popup !== this.$root.__popup)) {
          this.$root.__popup && this.$root.__popup.$destroy()
          document.body.appendChild(el)
          this.__popup = this.$root.__popup = new Vue({
            el,
            data () {
              return {
                open: false
              }
            },
            mounted () {
              this.$nextTick(() => {
                this.open = self.open = true
              })
            },
            render (createElement) {
              let my = this
              return createElement(Picker, {
                style: {
                  top: `${rect.bottom}px`,
                  height: `${window.innerHeight - rect.bottom}px`
                },
                props: {
                  options: self.options,
                  value: self.value,
                  popupClass: self.popupClass,
                  open: this.open
                },
                on: {
                  change (value) {
                    self.$emit('input', value).$emit('change', value)
                    my.open = self.open = false
                  },
                  close () {
                    my.open = self.open = false
                  },
                  'after-close': () => {
                    self.$root.__popup && self.$root.__popup.$destroy()
                    self.__popup = self.$root.__popup = null
                  }
                }
              }, self.$slots.default)
            }
          })
        } else if (this.__popup === this.$root.__popup) {
          this.__popup.open = this.open = !this.__popup.open
        }
      } else {
        if (this.$root.__popup) {
          this.$root.__popup.open = false
        }
      }
    }
  }
}
</script>
