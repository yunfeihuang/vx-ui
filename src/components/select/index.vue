<template>
  <div :class="classes" @click="clickHandler">
    <button type="button" :class="!option ? $cssPrefix + 'select-placeholder':''" >{{option?option.label:placeholder}}</button>
    <select 
      :required="required"
      :pattern="pattern"
      :value="value"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
      :multiple="multiple"
      @focus="clickHandler"
      @invalid="invalidHandler"
      >
      <option v-for="item in options" :value="item.value" >{{item.label}}</option>
    </select>
  </div>
</template>

<script>
import Vue from 'vue'
import {Actionsheet, ActionsheetItem} from '../actionsheet'
import { input } from 'utils/mixins.js'

export default {
  name: 'XSelect',
  mixins: [input],
  props: {
    options: {
      type: Array
    },
    getPopupMounted: {
      type: Function
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'select']
    }
  },
  created () {
    this.optionUpdate(this.value)
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
    inputHandler (e) {
      this.$emit('input', e.target.checked)
    },
    clickHandler (e) {
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
          return createElement(Actionsheet, {
            props: {
              open: this.open,
              value: this.value
            },
            class: [this.classes],
            on: {
              'on-close': this.closeHandler,
              'on-click': this.clickHandler
            },
            scopedSlots: {
              default (props) {
                return self.options.map((item) => {
                  return createElement(ActionsheetItem, {
                    props: {
                      value: item.value,
                      disabled: item.disabled
                    },
                    domProps: {
                      innerHTML: item.label
                    }
                  })
                })
              }
            }
          })
        },
        components: { Actionsheet, ActionsheetItem },
        data: {
          options: this.options,
          open: false,
          value: this.value,
          classes: this.$cssPrefix + 'select-actionsheet'
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
          closeHandler () {
            this.open = false
            setTimeout(() => {
              this.$destroy()
            }, 1000)
          },
          clickHandler (value) {
            if (self.value !== value) {
              self.$emit('on-change', value).$emit('input', value)
              self.updateLabel(value)
            } else {
              this.closeHandler()
            }
          }
        }
      })
    },
    optionUpdate (value) {
      let option = null
      this.options.forEach((item) => {
        if (item.value === value) {
          option = item
        }
      })
      this.option = option
    },
    updateLabel (value) {
      this.options && this.options.forEach(item => {
        item.value === value && this.$emit('update:label', item.label)
      })
    }
  },
  watch: {
    value (val) {
      this.optionUpdate(val)
    }
  },
  data () {
    return {
      option: null
    }
  }
}
</script>
