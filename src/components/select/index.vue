<template>
  <div :class="classes" @click="handleClick">
    <button type="button" :class="!label ? $cssPrefix + 'select-placeholder':''" >{{label || placeholder}}</button>
    <select 
      :required="required"
      :pattern="pattern"
      :value="value"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      @focus="handleClick"
      @invalid="handleInvalid"
      >
      <option v-for="item in options" :value="item.value" >{{item.label}}</option>
    </select>
  </div>
</template>

<script>
import Vue from 'vue'
import OptionPicker from './option-picker'
import { input } from 'utils/mixins.js'

export default {
  name: 'XSelect',
  mixins: [input],
  props: {
    value: {
      default: []
    },
    options: {
      type: Array
    },
    getPopupMounted: {
      type: Function
    },
    checkedMaxItem: {
      type: Number,
      default: 1
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'select']
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
    handleInput (e) {
      this.$emit('input', e.target.checked)
    },
    handleClick (e) {
      let self = this
      let node = document.createElement('div')
      if (this.getPopupMounted) {
        this.getPopupMounted(e).appendChild(node)
      } else {
        document.body.appendChild(node)
      }
      /* eslint-disable no-new */
      this.$popup = new Vue({
        el: node,
        render (createElement) {
          return createElement(OptionPicker, {
            props: {
              open: this.open,
              value: this.value,
              options: this.options,
              checkedMaxItem: this.checkedMaxItem,
              required: this.required
            },
            class: [this.classes],
            on: {
              'on-close': this.handleClose,
              'on-change': this.handleChange
            }
          })
        },
        data: {
          options: this.options,
          open: false,
          value: this.value,
          classes: this.$cssPrefix + 'select-picker',
          checkedMaxItem: this.checkedMaxItem,
          required: this.required
        },
        mounted () {
          this.open = true
        },
        destroyed () {
          requestAnimationFrame(() => {
            this.$el.remove()
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
            this.open = false
            if (self.value !== value) {
              self.$emit('input', value).$emit('on-change', value)
              self.updateLabel(value)
            } else {
              this.handleClose()
            }
          }
        }
      })
    },
    updateLabel (value) {
      if (this.checkedMaxItem === 1) {
        this.options && this.options.forEach(item => {
          if (item.value === value) {
            this.label = item.label
            this.$emit('update:label', item.label)
          }
        })
      } else {
        let label = []
        this.options && this.options.forEach(item => {
          value && value.indexOf(item.value) > -1 && label.push(item.label)
        })
        this.label = label.toString()
        this.$emit('update:label', label)
      }
    }
  },
  watch: {
    value (val) {
      this.updateLabel(val)
    }
  },
  data () {
    return {
      label: this.checkedMaxItem === 1 ? null : []
    }
  }
}
</script>
