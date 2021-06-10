<template>
  <div :class="['vx-tabbar--item', {'is-active':$parent.active === name, 'is-ripple': $parent.ripple}]"
    @click="$parent.change(name)">
    <ripple v-if="$parent.ripple" position="center">
      <slot v-bind="{active: $parent.active === name}"></slot>
    </ripple>
    <slot v-else v-bind="{active: $parent.active === name}"></slot>
  </div>
</template>

<script>
import Ripple from '../ripple'
export default {
  name: 'VxTabbarItem',
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
