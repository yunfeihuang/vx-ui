<template>
  <div class="color-picker-trigger" @click.stop="handleClick($event)">
    <div class="color-picker-value" :style="`background-color:${value}`"></div>
  </div>
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
      let rect = this.$el.getBoundingClientRect()
      let position = {}
      if (rect.left > window.innerWidth - rect.right) {
        position.right = window.innerWidth - rect.right
      } else {
        position.left = rect.left
      }
      if (rect.top > window.innerHeight - rect.bottom) {
        position.bottom = window.innerHeight - rect.bottom
      } else {
        position.top = rect.top + rect.height
      }
      /* eslint-disable no-new */
      $$colorPicker = new Vue({
        el,
        components: {
          SketchPicker
        },
        template: `<sketch-picker class="color-sketch-picker" :value="value" @input="handleChange"/>`,
        data () {
          return {
            value: self.value
          }
        },
        mounted () {
          Object.keys(position).forEach(item => {
            this.$el.style[item] = position[item] + 'px'
          })
        },
        methods: {
          handleChange (value) {
            let rgba = `rgba(${value.rgba.r},${value.rgba.g},${value.rgba.b},${value.rgba.a})`
            self.$emit('input', rgba).$emit('change', rgba)
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
    &-trigger{
      display:inline-block;
      width:0.6rem;
      height:0.6rem;
      border:1px solid;
      @include var-border-color($color-border);
      padding:1px;
      background-clip: content-box;
      @include var-border-radius($border-radius);
      vertical-align: middle;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMElEQVQ4T2N89uzZfwY8QFJSEp80A+OoAcMiDP7//483HTx//hx/Ohg1gIFx6IcBALl+VXknOCvFAAAAAElFTkSuQmCC");
    }
    &-value{
      width:100%;
      height:100%;
      border-radius:inherit;
    }
  }
  div.color-sketch-picker{
    z-index:10000;
    position:absolute;
  }
</style>
