<template>
  <div :class="_clas" :style="style" :disabled="disabled">
    <template v-for="item in options">
      <radio 
        :name="name"
        :disabled="item.disabled"
        :value="item.value"
        :checked="value===item.value"
        @change="changeHandler">
          {{item.label}}
      </radio>
      <divider v-if="divider"></divider>
    </template>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base, input } from 'utils/mixins.js'
import Radio from './Radio'
import Divider from '../divider'

export default {
  mixins: [base, input],
  components: {
    Radio,
    Divider
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'radio-group', this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (e) {
      this.$emit('on-change', e.target.value)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &radio-group{
      user-select: none;
      @include disabled;
      .#{$css-prefix}radio{
        padding:0.86rem 0.5rem;
      }
    }
  }
</style>
