<template>
  <div :class="classes" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'ButtonTabItem',
  props: {
    name: {
      type: [Number, String, Object],
      required: true
    }
  },
  methods: {
    handleClick () {
      this.$emit('change', this.name)
    }
  },
  computed: {
    classes () {
      let array = [this.$cssPrefix + 'flexbox-item', this.$cssPrefix + 'button-tab-item']
      if (this.$parent.active === this.name) {
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
