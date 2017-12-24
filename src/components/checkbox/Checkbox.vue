<template>
  <label :class="classes" :disabled="disabled" >
    <input type="checkbox" :name="name" :value="value" :disabled="disabled" :checked="checked" @change="changeHandler"/>
    <icon :class="[cssPrefix + 'checkbox-icon']">&#xe632;</icon>
    <slot></slot>
  </label>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
import Icon from '../icon'
export default {
  components: {
    Icon
  },
  mixins: [input],
  computed: {
    classes () {
      return [cssPrefix + 'checkbox', this.direction === 'reverse' ? cssPrefix + 'checkbox-reverse' : '']
    }
  },
  props: {
    direction: {
      type: String,
      default: 'normal'
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (e) {
      this.$emit('on-change', e)
    }
  }
}
</script>
