<template>
  <flexbox :class="classes" align="center">
    <div v-if="$slots.label" :class="[cssPrefix + 'field-label']">
      <slot name="label"></slot>
    </div>
    <div v-else-if="label" :class="[cssPrefix + 'field-label']">
      {{label}}
    </div>
    <flexbox-item :class="[cssPrefix + 'field-control',cssPrefix + 'field-align-' + align]">
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
    disabled: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'right'
    },
    label: {
      type: String
    },
    validityLabel: {
      type: String
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'field']
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
      let label = this.validityLabel || this.$el.querySelector('.' + cssPrefix + 'field-label').innerText
      let message = this.$parent.getValidityMessage(e.target.validity, label)
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
    &field{
      @include disabled;
      position:relative;
      background:#fff;
      height: 0.9rem;
      .#{$css-prefix}input-wrapper,.#{$css-prefix}password{
        position:static;
        background: transparent;
        input{
          padding-left:0;
        }
      }
      &-label{
        color:#999;
        padding:0 0.15rem;
      }
      &-control{
        padding:0 0.15rem;
        >input{
          @include input;
        }
      }
      &-align-right{
        text-align:right;
      }
    }
  }
</style>
