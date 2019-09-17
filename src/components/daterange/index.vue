<template>
  <x-input
    v-bind="$$props"
    arrow
    :value="myValue"
    :type="nativeType"
    readonly="readonly"
    v-on="$$listeners"
    @focusin.native="handleFocusIn"
    >
    <slot name="prepend" slot="prepend"></slot>
    <slot name="append" slot="append"></slot>
  </x-input>
</template>

<script>
import { input } from 'utils/mixins'
import Vue from 'vue'
import DaterangePicker from '../daterange-picker'
import XInput from '../input'
export default {
  name: 'Daterange',
  componentName: 'Daterange',
  components: {
    XInput
  },
  mixins: [input],
  props: {
    ...input.props,
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    separator: {
      type: String,
      default: ' ~ '
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    getPopupMounted: {
      type: Function
    }
  },
  computed: {
    myValue () {
      if (this.value && this.value[0] && this.value[1]) {
        return this.value[0].format() + this.separator + this.value[1].format()
      }
      return ''
    },
    $$props () {
      return {
        ...this.$props,
        ...this.$attrs
      }
    },
    $$listeners () {
      return {
        ...this.$listeners,
        change: this.handleChange,
        input: this.handleInput
      }
    }
  },
  beforeDestroy () {
    if (this.$root && this.$root.__popup && this.__popup === this.$root.__popup) {
      this.$root.__popup && this.$root.__popup.$destroy()
      this.__popup = this.$root.__popup = null
    }
  },
  methods: {
    handleFocusIn (e) {
      let daterange = this
      let node = document.createElement('div')
      if (this.getPopupMounted) {
        this.getPopupMounted(e).appendChild(node)
      } else {
        document.body.appendChild(node)
      }
      let value = []
      if (this.value && this.value[0] && this.value[1]) {
        value = [new Date(this.value[0].getFullYear(), this.value[0].getMonth(), this.value[0].getDate()), new Date(this.value[1].getFullYear(), this.value[1].getMonth(), this.value[1].getDate())]
      }
      if (this.$root && this.$root.__popup) {
        this.$root.__popup && this.$root.__popup.$destroy()
      }
      /* eslint-disable no-new */
      this.$root.__popup = this.__popup = new Vue({
        el: node,
        render (createElement) {
          return createElement(DaterangePicker, {
            props: {
              value: this.value,
              open: this.open
            },
            on: {
              'change': this.handleChange,
              'close': this.handleClose,
              'close-after': this.handleCloseAfter
            }
          })
        },
        components: { DaterangePicker },
        data: {
          open: false,
          value: value
        },
        mounted () {
          requestAnimationFrame(() => {
            this.open = true
          })
        },
        beforeDestroy () {
          this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        },
        methods: {
          handleChange (value) {
            daterange.$emit('input', value).$emit('change', value)
            daterange.eDispatch('ElFormItem', 'el.form.blur', [value])
            daterange.eDispatch('ElFormItem', 'el.form.change', [value])
          },
          handleClose () {
            this.open = false
          },
          handleCloseAfter () {
            this.$nextTick(() => {
              this.$destroy()
            })
          }
        }
      })
    }
  }
}
</script>

