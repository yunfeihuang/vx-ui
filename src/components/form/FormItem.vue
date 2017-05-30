<template>
  <flexbox :class="classes" align="center">
    <div :class="[cssPrefix+'form-label']">{{this.label}}</div>
    <flexbox-item :class="[cssPrefix+'form-control']">
      <slot></slot>
    </flexbox-item>
  </flexbox>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
  components: {
    Flexbox,
    FlexboxItem
  },
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
      return [cssPrefix + 'form-item', this.divider ? cssPrefix + 'form-divider' : '']
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
      let message = this.$parent.getValidityMessage(e.target.validity, this.label)
      this.$parent.showValidityMessage(message)
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
        background:#fff;
        height: 2.6rem;
        position:relative;
      }
      &-label{
        padding:0 10px;
        color:$sub-color;
      }
      &-control{
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
