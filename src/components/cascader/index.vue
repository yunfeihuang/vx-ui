<template>
  <div :class="['vx-cascader']" @focusin="handleFocusIn">
    <div class="vx-cascader--inner">
      <slot name="prepend"></slot>
      <div>
        <button type="button" :data-placeholder="placeholder">{{label.join(separator)}}</button>
      </div>
      <arrow v-if="arrow && !$slots.append" v-bind="arrowProps" direction="down"/>
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CascaderPopupPicker from '../cascader-popup-picker'
import { input } from '@/utils/mixins'
import Arrow from '../arrow'
export default {
  name: 'Cascader',
  componentName: 'Cascader',
  components: {
    CascaderPopupPicker,
    Arrow
  },
  mixins: [input],
  props: {
    ...input.props,
    value: CascaderPopupPicker.props.value,
    options: CascaderPopupPicker.props.options,
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean
    },
    separator: {
      type: String,
      default: '/'
    },
    arrow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      myValue: [...this.value],
      label: [],
      open: false
    }
  },
  watch: {
    value (value) {
      this.myValue = [...value]
    }
  },
  beforeDestroy () {
    if (this.$root && this.$root.__popup && this.__popup === this.$root.__popup) {
      this.$root.__popup && this.$root.__popup.$destroy()
      this.__popup = this.$root.__popup = null
    }
  },
  methods: {
    handleFocusIn () {
      let self = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      if (this.$root && this.$root.__popup) {
        this.$root.__popup && this.$root.__popup.$destroy()
      }
      this.$root.__popup = this.__popup = new Vue({
        el: node,
        render (createElement) {
          return createElement(CascaderPopupPicker, {
            props: {
              value: self.myValue,
              options: self.options,
              open: self.open,
              label: self.label
            },
            on: {
              change: self.handleChange,
              close: self.handleClose,
              'close-after': self.handleCloseAfter,
              'update:label': self.handleLabel
            }
          })
        },
        mounted () {
          self.open = true
        },
        beforeDestroy () {
          this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
        }
      })
    },
    handleChange (value) {
      this.myValue = value
      this.$emit('input', value).$emit('change', value)
      this.eDispatch('ElFormItem', 'el.form.blur', [value])
      this.eDispatch('ElFormItem', 'el.form.change', [value])
    },
    handleClose () {
      this.open = false
    },
    handleCloseAfter () {
      this.$nextTick(() => {
        this.__popup && this.__popup.$destroy()
      })
    },
    handleLabel (label) {
      this.label = label
    }
  }
}

</script>
