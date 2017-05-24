<template>
  <div :class="classes" :disabled="disabled">
    <template v-for="item in options">
      <checkbox 
        :name="item.name"
        :disabled="item.disabled"
        :value="item.value"
        :checked="value.indexOf(item.value)>-1"
        :direction="direction"
        @on-change="changeHandler"
        >
        {{item.label}}
      </checkbox>
      <divider v-if="divider"></divider>
    </template>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
import Checkbox from './Checkbox'
import Divider from '../divider'

export default {
  mixins: [input],
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
    },
    direction: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'checkbox-group']
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
      this.$emit('input', value)
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
    }
  }
</style>
