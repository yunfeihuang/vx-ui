<template>
  <div :class="['vx-select',{'is-focus':isFocus,'is-disabled':disabled}]" @click="handleClick">
    <flexbox class="vx-select-inner" align="center">
      <slot name="prepend"></slot>
      <flexbox-item>
        <button type="button" :data-placeholder="placeholder">{{myLabel}}</button>
      </flexbox-item>
      <arrow v-if="arrow && !$slots.append" v-bind="arrowProps" direction="down"/>
      <slot name="append"></slot>
    </flexbox>
    <div style="display:none">
      <slot></slot>
    </div>
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
    }
  },
  watch: {
    value (val) {
      this.updateLabel(val)
    }
  },
  data () {
    return {
      isFocus: false,
      myLabel: this.max === 1 ? '' : []
    }
  },
  mounted () {
    this.value && this.updateLabel(this.value)
  },
  destroyed () {
    if (this.$$popup) {
      this.$$popup.open = false
      setTimeout(() => {
        this.$$popup.$destroy()
        this.$$popup = null
      }, 2000)
    }
  },
  methods: {
    getOptions () {
      let result = []
      this.$children.forEach((item) => {
        if (item.$options && item.$options.componentName === 'XOption') {
          result.push({
            value: item.value,
            disabled: item.disabled,
            label: item.label || item.$el.innerHTML.trim(),
            html: item.$el.innerHTML.trim()
          })
        }
      })
      return result
    },
    handleClick (e) {
      if (!this.disabled) {
        let self = this
        let node = document.createElement('div')
        if (this.getPopupMounted) {
          this.getPopupMounted(e).appendChild(node)
        } else {
          document.body.appendChild(node)
        }
        this.$$myOptions = this.getOptions()
        if (this.$$myOptions.length) {
          /* eslint-disable no-new */
          this.$$popup = new Vue({
            el: node,
            render (createElement) {
              return createElement(Picker, {
                props: {
                  open: this.open,
                  value: this.max === 1 ? [this.value] : this.value,
                  options: this.options,
                  title: this.title,
                  max: this.max,
                  direction: this.direction
                },
                class: ['vx-select-picker'],
                on: {
                  'close': this.handleClose,
                  'close-after': this.handleCloseAfter,
                  'change': this.handleChange
                }
              })
            },
            data: {
              options: this.$$myOptions,
              open: false,
              value: this.value,
              title: this.placeholder,
              max: this.max,
              direction: this.max === 1 ? this.popupDirection : undefined
            },
            mounted () {
              this.open = true
              self.isFocus = true
            },
            destroyed () {
              requestAnimationFrame(() => {
                this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
              })
            },
            methods: {
              handleClose () {
                this.open = false
                self.isFocus = false
              },
              handleCloseAfter () {
                this.$destroy && this.$destroy()
              },
              handleChange (value) {
                if (self.value !== value) {
                  this.value = value
                  self.$emit('input', value).$emit('change', value)
                  self.eDispatch('ElFormItem', 'el.form.blur', [value])
                  self.eDispatch('ElFormItem', 'el.form.change', [value])
                  self.updateLabel(value)
                }
                this.$nextTick(this.handleClose)
              }
            }
          })
        }
      }
    },
    updateLabel (value) {
      this.$$myOptions = this.getOptions()
      if (this.max === 1) {
        this.$$myOptions && this.$$myOptions.forEach(item => {
          if (item.value === value) {
            this.myLabel = item.label
            this.$emit('update:label', item.label)
          }
        })
      } else {
        let label = []
        this.$$myOptions && this.$$myOptions.forEach(item => {
          value && value.indexOf(item.value) > -1 && label.push(item.label)
        })
        this.myLabel = label.toString()
        this.$emit('update:label', this.myLabel)
      }
    }
  }
}
</script>
