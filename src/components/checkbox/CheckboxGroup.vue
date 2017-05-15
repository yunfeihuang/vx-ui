<template>
  <div :class="_clas" :style="styles" :disabled="disabled">
    <template v-for="item in options">
      <checkbox 
        :name="item.name"
        :disabled="item.disabled"
        :value="item.value"
        :checked="value.indexOf(item.value)>-1"
        @on-change="changeHandler">
        {{item.label}}
      </checkbox>
      <divider v-if="divider"></divider>
    </template>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base, input } from 'utils/mixins.js'
import Checkbox from './Checkbox'
import Divider from '../divider'

export default {
  mixins: [base, input],
  components: {
    Checkbox,
    Divider
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    value: {
      type: Array,
      default: []
    },
    divider: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'checkbox-group', this.clas]
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (e) {
      let value = Object.assign([], this.value)
      if (e.target.checked) {
        value.indexOf(e.target.value) === -1 && value.push(e.target.value)
      } else {
        value.splice(value.indexOf(e.target.value), 1)
      }
      this.$emit('on-change', value)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &checkbox-group{
      user-select: none;
      @include disabled;
      .#{$css-prefix}checkbox{
        padding:0.86rem 0.5rem;
        display:block;
      }
    }
  }
</style>
