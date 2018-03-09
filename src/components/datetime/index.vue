<template>
  <x-input
    :type="nativeType"
    :placeholder="placeholder"
    readonly="readonly"
    :value="value"
    :disabled="disabled"
    :autofocus="autofocus"
    :maxlength="maxlength"
    :name="name"
    :required="required"
    :format="format"
    :clear="clear"
    @focus="handleFocus"
    @blur="handleBlur"
    @keyup="handleKeyup"
    @keydown="handleKeydown"
    @change="handleChange"
    @input="handleInput"
    @click.native="handleClick"
    />
</template>

<script>
import { input } from 'utils/mixins.js'
import Vue from 'vue'
import XInput from '../input'
import DatetimePicker from '../datetime-picker'
export default {
  componentName: 'Datetime',
  mixins: [input],
  components: {
    XInput
  },
  props: {
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    clear: {
      type: Boolean,
      default: false
    },
    getPopupMounted: {
      type: Function
    }
  },
  methods: {
    handleClick (e) {
      let datetime = this
      let node = document.createElement('div')
      if (this.getPopupMounted) {
        this.getPopupMounted(e).appendChild(node)
      } else {
        document.body.appendChild(node)
      }
      /* eslint-disable no-new */
      this.$datetimePicker = new Vue({
        el: node,
        render (createElement) {
          return createElement(DatetimePicker, {
            props: {
              open: this.open,
              value: this.value,
              format: this.format
            },
            on: {
              'change': this.handleChange,
              'close': this.handleClose
            }
          })
        },
        components: { DatetimePicker },
        data: {
          open: false,
          value: datetime.value === null ? undefined : datetime.value,
          format: datetime.format
        },
        mounted () {
          requestAnimationFrame(() => {
            this.open = true
          })
        },
        destroyed () {
          requestAnimationFrame(() => {
            this.$el.parentNode.removeChild(this.$el)
          })
        },
        methods: {
          handleChange (value) {
            this.open = false
            datetime.$emit('input', value).$emit('change', value)
          },
          handleClose () {
            this.open = false
          }
        }
      })
    }
  },
  destroyed () {
    this.$datetimePicker && this.$datetimePicker.$destroy()
  }
}
</script>

