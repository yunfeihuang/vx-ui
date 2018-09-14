<template>
  <div :class="['vx-select',{'is-focus':isFocus,'is-disabled':disabled}]" @focusin.stop.prevent="handleFocusIn">
    <flexbox class="vx-select--inner" align="center">
      <slot name="prepend"></slot>
      <flexbox-item>
        <button type="button" :data-placeholder="placeholder">{{myLabel}}</button>
      </flexbox-item>
      <arrow v-if="arrow && !$slots.append" v-bind="arrowProps" direction="down"/>
      <slot name="append"></slot>
    </flexbox>
    <datalist>
      <slot></slot>
    </datalist>
  </div>
</template>

<script>
import Vue from 'vue'
import Picker from './Picker'
import { input } from 'utils/mixins'
import { Flexbox, FlexboxItem } from '../flexbox'
import Arrow from '../arrow'

export default {
  componentName: 'XSelect',
  components: {
    Arrow,
    Flexbox,
    FlexboxItem
  },
  mixins: [input],
  props: {
    ...input.props,
    value: {
      type: [String, Array]
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
    popupDirection: {
      type: String
    },
    arrow: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
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
    this.$$myOptions = this.getOptions()
    this.value && this.updateLabel(this.value)
  },
  updated () {
    this.$nextTick(() => {
      this.$$myOptions = this.getOptions()
      this.updateLabel(this.value)
    })
  },
  methods: {
    getOptions () {
      let result = []
      let nodes = this.$el.querySelector('datalist').children
      let len = nodes.length
      for (let i = 0; i < len; i++) {
        let item = nodes[i]
        let html = item.innerHTML.trim()
        result.push({
          value: item.value,
          disabled: item.disabled,
          label: item.getAttribute('label') || html,
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
          this.$root.__popup = new Vue({
            el: node,
            render (createElement) {
              return createElement(Picker, {
                props: {
                  open: this.open,
                  value: self.max === 1 ? [self.value] : self.value,
                  options: self.$$myOptions,
                  title: self.title,
                  max: self.max,
                  direction: self.max === 1 ? self.popupDirection : undefined
                },
                class: ['vx-select--picker'],
                on: {
                  'close': this.handleClose,
                  'close-after': this.handleCloseAfter,
                  'change': this.handleChange
                }
              })
            },
            data: {
              open: false
            },
            mounted () {
              this.open = true
              self.isFocus = true
            },
            destroyed () {
              this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
            },
            methods: {
              handleClose () {
                self.isFocus = false
                this.open = false
              },
              handleCloseAfter () {
                this.$nextTick(() => {
                  this.$destroy()
                })
              },
              handleChange (value) {
                if (self.value !== value) {
                  this.value = value
                  self.$emit('input', value).$emit('change', value)
                  self.eDispatch('ElFormItem', 'el.form.blur', [value])
                  self.eDispatch('ElFormItem', 'el.form.change', [value])
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
    }
  }
}
</script>
