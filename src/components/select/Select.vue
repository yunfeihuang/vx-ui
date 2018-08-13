<template>
  <div :class="['vx-select',{'is-focus':isFocus,'is-disabled':disabled}]" @click.stop.prevent="handleClick">
    <flexbox class="vx-select-inner" align="center">
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
  provide () {
    return {
      'select': this
    }
  },
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
    },
    options () {
      this.updateLabel(this.value)
    }
  },
  data () {
    return {
      options: [],
      isFocus: false,
      myLabel: this.max === 1 ? '' : []
    }
  },
  mounted () {
    this.$$myOptions = this.getOptions()
    this.value && this.updateLabel(this.value)
  },
  destroyed () {
    if (this.$$popup) {
      this.$$popup.open = false
      this.$$popup.$destroy()
      this.$$popup = null
    }
  },
  methods: {
    getOptions () {
      let result = []
      this.options.forEach(item => {
        let html = item.$el.innerHTML.trim()
        result.push({
          value: item.value,
          disabled: item.disabled,
          label: item.label || html,
          html
        })
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
        if (this.$$myOptions.length) {
          /* eslint-disable no-new */
          this.$$popup = new Vue({
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
                class: ['vx-select-picker'],
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
      if (this.$$myOptions && this.$$myOptions.length) {
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
          this.myLabel = label.join(this.separator)
          this.$emit('update:label', this.myLabel)
        }
      } else {
        this.myLabel = ''
        this.$emit('update:label', '')
      }
    }
  }
}
</script>
