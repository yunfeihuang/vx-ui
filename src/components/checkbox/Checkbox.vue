<template>
  <label :class="classes" :disabled="disabled" >
    <input :type="type" :name="name" :value="value" :disabled="disabled" :checked="checked" @change="changeHandler"/>
    <icon :class="[$cssPrefix + 'checkbox-icon']">&#xe632;</icon>
    <span :class="[$cssPrefix + 'checkbox-text']">
      <slot></slot>
    </span>
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
      return [
        this.$cssPrefix + 'checkbox',
        this.direction === 'reverse' ? this.$cssPrefix + 'checkbox-reverse' : '',
        this.checked ? this.$cssPrefix + 'checkbox-active' : ''
      ]
    }
  },
  props: {
    direction: {
      type: String,
      default: 'normal'
    },
    type: {
      type: String,
      default: 'checkbox'
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
