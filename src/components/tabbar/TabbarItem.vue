<template>
  <component :is="$parent.ripple?'ripple':'div'" position="center" :class="classes" @click.native="handleClick">
    <slot></slot>
  </component>
</template>

<script>
import Ripple from '../ripple'
import Icon from '../icon'
export default {
  name: 'TabbarItem',
  components: {
    Ripple,
    Icon
  },
  methods: {
    handleClick (e) {
      this.$emit('on-change', this.index)
    }
  },
  computed: {
    classes () {
      let array = [this.$cssPrefix + 'flexbox-item', this.$cssPrefix + 'tabbar-item']
      if (this.active) {
        array.push(this.$cssPrefix + 'tabbar-item-active')
        array.push(this.$parent.activeClass)
      }
      return array
    }
  },
  data () {
    return {
      active: false
    }
  }
}
</script>
