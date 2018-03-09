<template>
  <component :is="$parent.ripple?'ripple':'div'" position="center" :class="classes" @click.native="handleClick">
    <slot></slot>
  </component>
</template>

<script>
import Ripple from '../ripple'
import Icon from '../icon'
export default {
  componentName: 'TabbarItem',
  components: {
    Ripple,
    Icon
  },
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('change', this.name)
    }
  },
  computed: {
    classes () {
      let array = [this.$cssPrefix + 'flexbox-item', this.$cssPrefix + 'tabbar-item']
      if (this.$parent.active === this.name) {
        array.push(this.$cssPrefix + 'tabbar-item-active')
        array.push(this.$parent.activeClass)
      }
      return array
    }
  }
}
</script>
