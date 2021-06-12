<template>
  <vx-input
    v-bind="$$props"
    arrow
    :value="myValue"
    :type="nativeType"
    readonly="readonly"
    @focusin="handleFocusIn"
    >
    <template v-slot:prepend>
      <slot name="prepend"></slot>
    </template>
    <template v-slot:append>
      <slot name="append"></slot>
    </template>
  </vx-input>
</template>

<script>
import { input } from '@/utils/mixins'
import { createApp } from 'vue'
import DaterangePicker from '../daterange-picker'
import VxInput from '../input'

export default {
  name: 'VxDaterange',
  components: {
    VxInput
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
    modelValue: {
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
      if (this.modelValue && this.modelValue[0] && this.modelValue[1]) {
        return this.modelValue[0].format() + this.separator + this.modelValue[1].format()
      }
      return ''
    },
    $$props () {
      return {
        ...this.$props,
        ...this.$attrs,
        change: this.handleChange,
        input: this.handleInput
      }
    }
  },
  beforeUnmount () {
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
      if (this.modelValue && this.modelValue[0] && this.modelValue[1]) {
        value = [new Date(this.modelValue[0].getFullYear(), this.modelValue[0].getMonth(), this.modelValue[0].getDate()), new Date(this.modelValue[1].getFullYear(), this.modelValue[1].getMonth(), this.modelValue[1].getDate())]
      }
      if (this.$root && this.$root.__popup) {
        this.$root.__popup && this.$root.__popup.$destroy()
      }
      /* eslint-disable no-new */
      this.$root.__popup = this.__popup = createApp({
        el: node,
        render (createElement) {
          return createElement(DaterangePicker, {
            props: {
              value: this.modelValue,
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
        data() {
          return {
            open: false,
            value: value
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
          handleChange (value) {
            daterange.$emit('update:modelValue', value)
            daterange.$emit('change', value)
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

