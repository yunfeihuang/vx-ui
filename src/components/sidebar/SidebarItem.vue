<template>
  <div :class="classes" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  methods: {
    clickHandler (e) {
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
