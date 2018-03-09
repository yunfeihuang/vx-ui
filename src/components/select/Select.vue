<template>
  <div :class="classes" @click="handleClick" :disabled="disabled">
    <button type="button" :class="myLabel ? '' : $cssPrefix + 'select-placeholder'" >{{myLabel || placeholder}}</button>
    <div style="display:none">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Picker from './Picker'
import { input } from 'utils/mixins.js'

export default {
  componentName: 'XSelect',
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
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'select']
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
    this.value && this.updateLabel(this.value)
  },
  destroyed () {
    if (this.$popup) {
      this.$popup.open = false
      setTimeout(() => {
        this.$popup.$destroy()
        this.$popup = null
      }, 2000)
    }
  },
  methods: {
    getOptions () {
      return this.$children.map((item) => {
        return {
          value: item.value,
          disabled: item.disabled,
          label: item.$el.innerText.trim()
        }
      })
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
        this.$myOptions = this.getOptions()
        if (this.$myOptions.length) {
          /* eslint-disable no-new */
          this.$popup = new Vue({
            el: node,
            render (createElement) {
              return createElement(Picker, {
                props: {
                  open: this.open,
                  value: this.value,
                  options: this.options,
                  max: this.max,
                  required: this.required
                },
                class: [this.classes],
                on: {
                  'close': this.handleClose,
                  'change': this.handleChange
                }
              })
            },
            data: {
              options: this.$myOptions,
              open: false,
              value: this.value,
              classes: this.$cssPrefix + 'select-picker',
              max: this.max,
              required: this.required
            },
            mounted () {
              this.open = true
            },
            destroyed () {
              requestAnimationFrame(() => {
                this.$el.parentNode.removeChild(this.$el)
              })
            },
            methods: {
              handleClose () {
                this.open = false
                setTimeout(() => {
                  this.$destroy()
                }, 1000)
              },
              handleChange (value) {
                if (self.value !== value) {
                  self.$emit('input', value).$emit('change', value)
                  self.updateLabel(value)
                } else {
                  this.handleClose()
                }
                this.open = false
              }
            }
          })
        }
      }
    },
    updateLabel (value) {
      this.$myOptions = this.getOptions()
      if (this.max === 1) {
        this.$myOptions && this.$myOptions.forEach(item => {
          if (item.value === value) {
            this.myLabel = item.label
            this.$emit('update:label', item.label)
          }
        })
      } else {
        let label = []
        this.$myOptions && this.$myOptions.forEach(item => {
          value && value.indexOf(item.value) > -1 && label.push(item.label)
        })
        this.myLabel = label.toString()
        this.$emit('update:label', this.myLabel)
      }
    }
  }
}
</script>
