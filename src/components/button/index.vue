<template>
  <button :class="classes" :type="nativeType" :disabled="disabled">
    <spinner v-if="loading" :primary-color="loadingColor[type]"/>
    <span><slot></slot></span>
    <ripple v-if="ripple" :color="rippleColor" />
    <slot name="upload"></slot>
  </button>
</template>

<script>
import { button } from 'utils/mixins'
import Spinner from '../spinner'
import Ripple from '../ripple'

export default {
  name: 'XButton',
  componentName: 'XButton',
  components: {
    Spinner,
    Ripple
  },
  mixins: [button],
  props: {
    round: {
      type: Boolean
    },
    rippleColor: {
      type: String
    }
  },
  computed: {
    classes () {
      return [
        'vx-btn',
        'vx-btn--' + this.type,
        'vx-btn--size-' + this.size,
        {
          'is-plain': this.plain || this.type === 'default',
          'is-ripple': this.ripple,
          'is-round': this.round,
          'is-disabled': this.disabled || this.loading
        }
      ]
    }
  }
}
</script>
