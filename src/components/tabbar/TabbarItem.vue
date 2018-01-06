<template>
  <component :is="$parent.ripple?'ripple':'div'" position="center" :class="classes" @click="clickHandler">
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
    clickHandler (e) {
      this.$emit('on-change', this.index)
      this.$emit('click', e)
    }
  },
  computed: {
    classes () {
      let array = ['flexbox-item', this.$cssPrefix + 'tabbar-item']
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
