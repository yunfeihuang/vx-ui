<template>
  <input 
    :type="htmlType"
    :placeholder="placeholder"
    readonly="readonly"
    :value="value"
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
import DatetimePicker from '../datetime-picker'
export default {
  mixins: [input],
  props: {
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    getPopupMounted: {
      type: Function
    }
  },
  methods: {
    clickHandler (e) {
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
        template: '<datetime-picker :format="format" :value="value" :open="open" @on-change="changeHandler" @on-close="closeHandler"/>',
        components: { DatetimePicker },
        data: {
          open: false,
          value: datetime.value,
          format: datetime.format
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
            this.open = false
            datetime.$emit('on-change', value)
            datetime.$emit('input', value)
          },
          closeHandler () {
            this.open = false
          }
        }
      })
    }
  },
  destroyed () {
    this.$datetimePicker && this.$datetimePicker.$destroy()
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

