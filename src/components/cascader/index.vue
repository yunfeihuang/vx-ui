<template>
  <div :class="['vx-cascader',{'is-focus': open}]" @click="handleClick">
    <flexbox class="vx-cascader--inner" align="center">
      <slot name="prepend"></slot>
      <flexbox-item>
        <button type="button" :data-placeholder="placeholder">{{label.join(separator)}}</button>
      </flexbox-item>
      <arrow v-if="arrow && !$slots.append" v-bind="arrowProps" direction="down"/>
      <slot name="append"></slot>
    </flexbox>
  </div>
</template>

<script>
import Vue from 'vue'
import CascaderPopupPicker from '../cascader-popup-picker'
import { input } from 'utils/mixins'
import {Flexbox, FlexboxItem} from '../flexbox'
import Arrow from '../arrow'
export default {
  componentName: 'Cascader',
  components: {
    CascaderPopupPicker,
    Flexbox,
    FlexboxItem,
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
  methods: {
    handleClick () {
      let self = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      this.$$cascaderPopupPicker = new Vue({
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
        destroyed () {
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
        this.$$cascaderPopupPicker && this.$$cascaderPopupPicker.$destroy()
      })
    },
    handleLabel (label) {
      this.label = label
    }
  }
}

</script>
