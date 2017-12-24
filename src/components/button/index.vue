<template>
  <button :class="classes" :disabled="disabled" :type="htmlType" @click="clickHandler">
    <slot></slot>
  </button>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { button } from 'utils/mixins.js'
export default {
  mixins: [button],
  computed: {
    classes () {
      return [cssPrefix + 'btn', this.type ? (cssPrefix + 'btn-' + this.type) : this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    clickHandler (e) {
      this.$emit('on-click', e)
    }
  }
}
</script>
