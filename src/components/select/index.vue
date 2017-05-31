<template>
  <div :class="classes" @click="clickHandler">
    <button type="button" :class="!option ? cssPrefix + 'select-placeholder':''" >{{option?option.label:placeholder}}</button>
    <select 
      :required="required"
      :pattern="pattern"
      :value="value"
      :name="name"
      :disabled="disabled"
      :readonly="readonly"
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
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'

export default {
  mixins: [input],
  props: {
    options: {
      type: Array
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'select']
    }
  },
  created () {
    this.optionUpdate(this.value)
  },
  destroyed () {
    if (this.popup) {
      this.popup.open = false
      setTimeout(() => {
        this.popup.$destroy()
        this.popup = null
      }, 2000)
    }
  },
  methods: {
    inputHandler (e) {
      this.$emit('input', e.target.checked)
    },
    clickHandler () {
      let select = this
      let node = document.createElement('div')
      document.body.appendChild(node)
      /* eslint-disable no-new */
      this.popup = new Vue({
        el: node,
        template: '<actionsheet :class="classes" :open="open" :value="value" @on-close="closeHandler" @on-menu="menuHandler"><actionsheet-item v-for="item in options" :value="item.value" :disabled="item.disabled">{{item.label}}</actionsheet-item></actionsheet>',
        components: { Actionsheet, ActionsheetItem },
        data: {
          options: this.options,
          open: false,
          value: this.value,
          classes: cssPrefix + 'select-actionsheet'
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
          menuHandler (val) {
            select.$emit('on-change', val)
            select.$emit('input', val)
          }
        }
      })
    },
    optionUpdate (val) {
      let option = null
      this.options.forEach((item) => {
        if (item.value === val) {
          option = item
        }
      })
      this.option = option
    }
  },
  watch: {
    value (val) {
      this.optionUpdate(val)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      option: null
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &select{
      position:relative;
      height:2.6rem;
      select{
        display:none;
      }
      button{
        border: 0;
        background-color: transparent;
        font-size: inherit;
        text-align: inherit;
        height: 100%;
        outline: none;
        box-sizing: border-box;
        width: 100%;
        padding:0;
        z-index:1;
      }
      &-placeholder{
        color: #999;
      }
      &-actionsheet{
        .#{$css-prefix}popup-inner{
          max-height:65%;
        }
      }
    }
  }
</style>
