<template>
  <component :is="$parent.ripple?'ripple':'div'" position="center" :class="classes" @click="clickHandler">
    <slot></slot>
  </component>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Ripple from '../ripple'
import Icon from '../icon'
export default {
  name: 'TabbarItem',
  components: {
    Ripple,
    Icon
  },
  methods: {
    clickHandler (e) {
      this.$emit('on-change', this.index)
      this.$emit('click', e)
    }
  },
  computed: {
    classes () {
      let array = ['flexbox-item', cssPrefix + 'tabbar-item']
      if (this.active) {
        array.push(cssPrefix + 'tabbar-item-active')
        array.push(this.$parent.activeClass)
      }
      return array
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      active: false
    }
  }
}
</script>
