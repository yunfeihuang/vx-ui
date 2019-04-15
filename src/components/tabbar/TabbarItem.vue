<template>
  <div :class="['vx-flexbox--item', 'vx-tabbar--item', {'is-active':$parent.active === name, 'is-ripple': $parent.ripple}]"
    @click="$parent.change(name)">
    <ripple v-if="$parent.ripple" position="center">
      <slot></slot>
    </ripple>
    <slot v-else></slot>
  </div>
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
