<template>
  <div :class="classes" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonTabItem',
  methods: {
    handleClick (e) {
      this.$emit('on-change', this.index)
    }
  },
  computed: {
    classes () {
      let array = [this.$cssPrefix + 'flexbox-item', this.$cssPrefix + 'button-tab-item']
      if (this.active) {
        array.push(this.$cssPrefix + 'button-tab-item-active')
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
