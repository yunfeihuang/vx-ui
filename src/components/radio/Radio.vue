<template>
  <label :class="classes" :disabled="disabled" >
    <input type="radio" :name="name" :value="value" :disabled="disabled" :checked="checked" @change="changeHandler"/>
    <span :class="[$cssPrefix + 'radio-icon']"><icon>&#xe632;</icon></span>
    <slot></slot>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
import Icon from '../icon'
export default {
  name: 'Radio',
  components: {
    Icon
  },
  mixins: [input],
  computed: {
    classes () {
      return [this.$cssPrefix + 'radio']
    }
  },
  methods: {
    changeHandler (e) {
      this.$emit('on-change', e.target.value)
      this.$emit('input', e.target.value)
    }
  }
}
</script>
