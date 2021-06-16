<template>
  <div :class="['vx-grid--item', {'is-divider': $parent.gutter == 1}]"
    :style="{
        width: `${100 / _col * col}%`,
        borderRightWidth: `${gutter}px`,
        borderBottomWidth: `${gutter}px`
      }"
    @click="linkTo">
    <div class="vx-grid--item-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'VxGridItem',
  props: {
    to: {
      type: [String, Object]
    },
    col: {
      type: Number,
      default: 1
    }
  },
  setup () {
    return {
      gutter: inject('vxGrid') ? inject('vxGrid').gutter : 8,
      _col: inject('vxGrid') ? inject('vxGrid').col : 2
    }
  },
  methods: {
    linkTo () {
      this.to && this.$router.push(this.to)
    }
  }
}
</script>
