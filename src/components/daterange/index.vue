<template>
  <input 
    :type="htmlType"
    :placeholder="placeholder"
    readonly="readonly"
    :value="myValue"
    :disabled="disabled" 
    :autofocus="autofocus"
    :maxlength="maxlength"
    :name="name" 
    :required="required"
    :format="format"
    @focus="focusHandler"
    @blur="blurHandler"
    @keyup="keyupHandler"
    @keydown="keydownHandler" 
    @change="changeHandler"
    @input="inputHandler"
    @click="clickHandler"
    />
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
import Vue from 'vue'
import DaterangePicker from '../daterange-picker'
export default {
  name: 'DateRange',
  mixins: [input],
  props: {
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    getPopupMounted: {
      type: Function
    }
  },
  computed: {
    myValue () {
      if (this.value[0] && this.value[1]) {
        return this.value[0].format() + ' ~ ' + this.value[1].format()
      }
      return ''
    }
  },
  methods: {
    clickHandler (e) {
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
      /* eslint-disable no-new */
      this.$daterangePicker = new Vue({
        el: node,
        template: '<daterange-picker :value="value" :open="open" @on-change="changeHandler" @on-close="closeHandler"/>',
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
        destroyed () {
          requestAnimationFrame(() => {
            this.$el.remove()
          })
        },
        methods: {
          changeHandler (value) {
            daterange.$emit('on-change', value)
            daterange.$emit('input', value)
          },
          closeHandler () {
            this.open = false
          }
        }
      })
    }
  },
  destroyed () {
    this.$daterangePicker && this.$daterangePicker.$destroy()
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

