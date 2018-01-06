<template>
  <div :class="classes" @click="clickHandler">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonTabItem',
  methods: {
    clickHandler (e) {
      this.$emit('on-change', this.index)
    }
  },
  computed: {
    classes () {
      let array = ['flexbox-item', this.$cssPrefix + 'button-tab-item']
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
