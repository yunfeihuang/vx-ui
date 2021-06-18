<template>
  <button :class="classes" :type="nativeType" :disabled="disabled" v-bind="$attrs" v-on="$attrs">
    <vx-spinner v-if="loading && !disabled" :primary-color="loadingColor[type]"/>
    <span><slot></slot></span>
    <vx-ripple v-if="ripple" :color="rippleColor" />
    <slot name="upload"></slot>
  </button>
</template>

<script>
import { button } from '@/utils/mixins'
import VxSpinner from '../spinner'
import VxRipple from '../ripple'

export default {
  name: 'VxButton',
  components: {
    VxSpinner,
    VxRipple
  },
  mixins: [button],
  props: {
    round: {
      type: Boolean
    },
    rippleColor: {
      type: String
    },
    square: {
      type: Boolean
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
          'is-square': this.square,
          'is-round': this.round,
          'is-loading': this.loading,
          'is-disabled': this.disabled
        }
      ]
    }
  }
}
</script>
