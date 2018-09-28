<template>
  <button :class="classes" :type="nativeType" :disabled="disabled">
    <spinner v-if="loading" :primary-color="loadingColor[type]"/>
    <span><slot></slot></span>
    <ripple v-if="ripple" :color="rippleColor" />
  </button>
</template>

<script>
import { button } from 'utils/mixins'
import Spinner from '../spinner'
import Ripple from '../ripple'

export default {
  componentName: 'XButton',
  components: {
    Spinner,
    Ripple
  },
  mixins: [button],
  props: {
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
          'is-plain': this.plain,
          'is-ripple': this.ripple,
          'is-disabled': this.disabled || this.loading
        }
      ]
    }
  }
}
</script>
