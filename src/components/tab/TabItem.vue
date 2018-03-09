<template>
  <div :class="classes" @click="handleClick">
    <span v-if="$parent.underlineWidth" :class="[$cssPrefix + 'tab-item-text']">
      <slot></slot>
    </span>
    <slot v-else></slot>
  </div>
</template>

<script>
export default {
  componentName: 'TabItem',
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
      let array = [this.$cssPrefix + 'flexbox-item', this.$cssPrefix + 'tab-item']
      if (this.$parent.active === this.name) {
        array.push(this.$cssPrefix + 'tab-item-active')
        array.push(this.$parent.activeClass)
      }
      return array
    }
  }
}
</script>
