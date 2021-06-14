<template>
  <div :class="['vx-tabbar--item', {'is-active':$parent.active === name, 'is-ripple': $parent.ripple}]"
    @click="$parent.change(name)">
    <vx-ripple v-if="$parent.ripple" position="center">
      <slot v-bind="{active: $parent.active === name}"></slot>
    </vx-ripple>
    <slot v-else v-bind="{active: $parent.active === name}"></slot>
  </div>
</template>

<script>
import VxRipple from '../ripple'
export default {
  name: 'VxTabbarItem',
  components: {
    VxRipple
  },
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  }
}
</script>
