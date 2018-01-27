<template>
  <div :class="classes" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  methods: {
    handleClick (e) {
      this.$emit('on-change', this.index)
    }
  },
  computed: {
    classes () {
      let array = [this.$cssPrefix + 'sidebar-item']
      if (this.active) {
        array.push(this.$cssPrefix + 'sidebar-item-active')
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
