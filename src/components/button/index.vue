<template>
  <button :class="classes" :disabled="disabled||loading" :type="nativeType" @click="handleClick">
    <spinner v-if="loading" :primary-color="loadingColor[type]"/>
    <span><slot></slot></span>
    <ripple v-if="ripple" />
  </button>
</template>

<script>
import { button } from 'utils/mixins.js'
import Spinner from '../spinner'
import Ripple from '../ripple'

export default {
  componentName: 'XButton',
  components: {
    Spinner,
    Ripple
  },
  mixins: [button],
  computed: {
    classes () {
      return [
        'vx-btn',
        'vx-btn-' + this.type,
        'vx-btn-size-' + this.size,
        {'is-plain': this.plain},
        {'is-ripple': this.ripple}
      ]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
