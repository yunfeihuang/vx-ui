<template>
  <div :class="['vx-select',`vx-select--size-${size}`, {'is-disabled':disabled}]" @click.stop.prevent="handleFocusIn">
    <div class="vx-select--inner">
      <slot name="prepend"></slot>
      <div class="vx-select--placeholder">
        <span :data-placeholder="placeholder">{{myLabel}}</span>
      </div>
      <template v-if="!$slots.append">
        <transition v-if="this.clearable && value+''" name="input-clearable-fade">
          <button
            tabindex="-2"
            type="button"
            v-show="!!value && clearable && !disabled"
            class="vx-input--clearable-button"
            @click.stop="handleClear">
            <i class="vx-input--clearable-icon"></i>
          </button>
        </transition>
        <arrow v-else-if="arrow" v-bind="arrowProps" direction="down"/>
      </template>
      <slot v-else name="append"></slot>
    </div>
    <datalist>
      <slot></slot>
    </datalist>
  </div>
</template>

<script>
import { createApp } from 'vue'
import Picker from './Picker'
import { input } from '@/utils/mixins'
import Arrow from '../arrow'

export default {
  name: 'VxSelect',
  components: {
    Arrow
  },
  mixins: [input],
  props: {
    ...input.props,
    modelValue: {
      type: [String, Number, Array]
    },
    getPopupMounted: {
      type: Function
    },
    max: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    popupProps: {
      type: Object
    },
    arrow: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value (val) {
      this.updateLabel(val)
    }
  },
  data () {
    return {
      myLabel: this.max === 1 ? '' : []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$$myOptions = this.getOptions()
      this.modelValue && this.updateLabel(this.modelValue)
    })
  },
  updated () {
    this.$nextTick(() => {
      this.$$myOptions = this.getOptions()
      this.updateLabel(this.modelValue)
    })
  },
  beforeUnmount () {
    if (this.$root && this.$root.__popup && this.__popup === this.$root.__popup) {
      this.$root.__popup && this.$root.__popup.$destroy()
      this.__popup = this.$root.__popup = null
    }
  },
  methods: {
    getOptions () {
      let result = []
      let nodes = this.$el.querySelector('datalist').children
      let len = nodes.length
      for (let i = 0; i < len; i++) {
        let node = nodes[i]
        let item = JSON.parse(node.value)
        let html = node.innerHTML.trim()
        result.push({
          label: nodes[i].innerText,
          ...item,
          html
        })
      }
      return result
    },
    handleFocusIn (e) {
      if (!this.disabled) {
        let self = this
        let node = document.createElement('div')
        if (this.getPopupMounted) {
          this.getPopupMounted(e).appendChild(node)
        } else {
          document.body.appendChild(node)
        }
        if (this.$root && this.$root.__popup) {
          this.$root.__popup && this.$root.__popup.$destroy()
        }
        if (this.$$myOptions.length) {
          /* eslint-disable no-new */
          this.$root.__popup = this.__popup = createApp({
            el: node,
            render (createElement) {
              return createElement(Picker, {
                props: {
                  open: this.open,
                  value: self.value,
                  options: self.$$myOptions,
                  title: self.title,
                  max: self.max,
                  ...self.popupProps
                },
                class: ['vx-select--picker'],
                on: {
                  'close': this.handleClose,
                  'close-after': this.handleCloseAfter,
                  'change': this.handleChange
                }
              })
            },
            data () {
              return {
                open: false
              }
            },
            mounted () {
              requestAnimationFrame(() => {
                this.open = true
              })
            },
            beforeUnmount () {
              this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
            },
            methods: {
              handleClose () {
                this.open = false
              },
              handleCloseAfter () {
                this.$nextTick(() => {
                  this.$destroy()
                })
              },
              handleChange (value) {
                if (self.value !== value) {
                  self.$emit('update:modelValue', value) && self.$emit('change', value)
                  self.updateLabel(value)
                }
                this.handleClose()
              }
            }
          })
        }
      }
    },
    updateLabel (value) {
      let label = this.getLabel(value)
      if (label !== this.$$label) {
        this.$$label = label
        this.myLabel = label
        this.$emit('update:label', label)
      }
    },
    getLabel (value) {
      let result = ''
      if (this.$$myOptions && this.$$myOptions.length) {
        if (this.max === 1) {
          this.$$myOptions && this.$$myOptions.forEach(item => {
            if (item.value === value) {
              result = item.label
            }
          })
        } else {
          let label = []
          this.$$myOptions && this.$$myOptions.forEach(item => {
            value && value.indexOf(item.value) > -1 && label.push(item.label)
          })
          result = label.join(this.separator)
        }
      }
      return result
    },
    handleClear () {
      let value = this.max === 1 ? '' : []
      this.$emit('update:modelValue', value) && this.$emit('change', value)
    }
  }
}
</script>
