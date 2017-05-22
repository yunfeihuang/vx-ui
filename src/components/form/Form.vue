<template>
  <form :class="classes" :style="styles" :data-action="action" @submit="submitHandler">
    <slot></slot>
  </form>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'

export default {
  mixins: [base],
  props: {
    action: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'form', this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    submitHandler () {
      this.$emit('on-submit')
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    
  }
</style>
