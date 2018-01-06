<template>
  <label :class="classes" :disabled="disabled" >
    <input type="checkbox" :name="name" :value="value" :disabled="disabled" :checked="checked" @change="changeHandler"/>
    <icon :class="[$cssPrefix + 'checkbox-icon']">&#xe632;</icon>
    <slot></slot>
  </label>
</template>

<script>
import { input } from 'utils/mixins.js'
import Icon from '../icon'
export default {
  name: 'Checkbox',
  components: {
    Icon
  },
  mixins: [input],
  computed: {
    classes () {
      return [this.$cssPrefix + 'checkbox', this.direction === 'reverse' ? this.$cssPrefix + 'checkbox-reverse' : '']
    }
  },
  props: {
    direction: {
      type: String,
      default: 'normal'
    }
  },
  methods: {
    changeHandler (e) {
      this.$emit('on-change', e)
      this.$emit('update:checked', e.target.checked)
    }
  }
}
</script>
