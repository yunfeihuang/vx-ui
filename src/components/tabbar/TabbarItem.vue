<template>
  <component :is="$parent.ripple?'ripple':'div'"
    position="center"
    :class="['vx-flexbox--item', 'vx-tabbar--item', {'is-active':$parent.active === name}]"
    @click.native="$parent.change(name)">
    <slot></slot>
  </component>
</template>

<script>
import Ripple from '../ripple'
export default {
  componentName: 'TabbarItem',
  components: {
    Ripple
  },
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  }
}
</script>
