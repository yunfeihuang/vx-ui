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
      this.open = true
      let self = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      this.$$cascaderPopupPicker = new Vue({
        el: node,
        render (h) {
          return (
            <CascaderPopupPicker
              value={self.myValue}
              options={self.options}
              open={self.open}
              onChange={self.handleChange}
              onClose={self.handleClose}
              label={self.label}
              {...{on: {'update:label': self.handleLabel}}}
            />
          )
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
