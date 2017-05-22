<template>
  <div :class="classes">
    <div :class="[cssPrefix+'form-label']">{{this.label}}</div>
    <div :class="[cssPrefix+'form-control']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'form-item', this.divider ? cssPrefix + 'form-divider' : '', this.clas]
    }
  },
  mounted () {
    this.$slots.default.forEach((node) => {
      if (node.componentInstance) {
        node.componentInstance.$on('invalid', this.invalidHandler)
      } else {
        node.elm.oninvalid = this.invalidHandler
      }
    })
  },
  methods: {
    invalidHandler (e) {
      if (!this.$parent.invalid) {
        this.$parent.invalid = true
        window.toast({
          content: e.target.validationMessage,
          onClose: () => {
            this.$parent.invalid = false
          }
        })
      }
      e.preventDefault()
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &form{
      &-item{
        display:flex;
        align-items: center;
        background:#fff;
        height: 2.6rem;
        position:relative;
      }
      &-label{
        padding:0 10px;
        color:$sub-color;
      }
      &-control{
        flex:1;
        text-align:right;
        padding:0 10px;
        >input{
          @include input;
        }
      }
      &-divider{
        &:after{
          @include divider;
        }
      }
    }
  }
</style>
