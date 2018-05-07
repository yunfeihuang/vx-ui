<template>
  <button :class="classes" :disabled="disabled||loading" :type="nativeType" @click="handleClick">
    <spinner v-if="loading" :primary-color="loadingColor[type]"/>
    <span><slot></slot></span>
  </button>
</template>

<script>
import { button } from 'utils/mixins.js'
import Spinner from '../spinner'

export default {
  componentName: 'XButton',
  components: {
    Spinner
  },
  mixins: [button],
  props: {
    loadingColor: {
      type: Object,
      default () {
        return {
          default: '#d6d6d6',
          danger: '#e04b00',
          warning: '#ff9900'
        }
      }
    },
    loading: {
      type: Boolean,
      defauft: false
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'btn', this.$cssPrefix + 'btn-' + this.type, {'is-plain': this.plain}]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
