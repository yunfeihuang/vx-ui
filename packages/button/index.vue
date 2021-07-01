<template>
  <button 
    :class="[
      'vx-btn',
      'vx-btn--' + type,
      'vx-btn--size-' + size,
      {
        'is-plain': plain || type === 'default',
        'is-ripple': ripple,
        'is-square': square,
        'is-round': round,
        'is-loading': loading,
        'is-disabled': disabled
      }
    ]"
    :type="nativeType"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$attrs">
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
  props: {
    ...button.props,
    round: {
      type: Boolean
    },
    rippleColor: {
      type: String
    },
    square: {
      type: Boolean
    }
  }
}
</script>
