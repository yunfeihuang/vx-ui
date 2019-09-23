<template>
  <div class="color-picker" :style="`background-color:${value}`" @click.stop="handleClick"></div>
</template>

<script>
import Vue from 'vue'
import {Sketch as SketchPicker} from 'vue-color'
let $$colorPicker = null
export default {
  componentName: 'ColorPicker',
  name: 'ColorPicker',
  props: {
    value: {
      type: String
    }
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    destroy () {
      if ($$colorPicker && $$colorPicker.$destroy) {
        $$colorPicker.$destroy()
        document.body.removeChild($$colorPicker.$el)
        $$colorPicker = null
      }
    },
    handleClick () {
      let el = document.createElement('div')
      document.body.appendChild(el)
      let self = this
      this.destroy()
      /* eslint-disable no-new */
      $$colorPicker = new Vue({
        el,
        components: {
          SketchPicker
        },
        template: `<sketch-picker :value="value" @input="handleChange"/>`,
        data () {
          return {
            value: self.value
          }
        },
        methods: {
          handleChange (value) {
            self.$emit('input', value.hex).$emit('change', value.hex)
          }
        }
      })
      window.onclick = this.destroy
    }
  }
}
</script>
<style lang="scss">
  .color-picker{
    display:inline-block;
    width:0.6rem;
    height:0.6rem;
    border:1px solid;
    @include var-border-color($color-border);
    padding:1px;
    background-clip: content-box;
    @include var-border-radius($border-radius);
  }
</style>
