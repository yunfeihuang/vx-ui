<template>
  <div class="vx-cascader" :data-placeholder="placeholder" @click="handleClick">{{label.join('')}}</div>
</template>

<script>
import Vue from 'vue'
import CascaderPopupPicker from '../cascader-popup-picker'
export default {
  componentName: 'Cascader',
  components: {
    CascaderPopupPicker
  },
  props: {
    value: CascaderPopupPicker.props.value,
    options: CascaderPopupPicker.props.options,
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: {
      type: Boolean
    }
  },
  data () {
    return {
      myValue: [...this.value],
      label: [],
      open: false
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
    },
    handleClose () {
      this.open = false
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
