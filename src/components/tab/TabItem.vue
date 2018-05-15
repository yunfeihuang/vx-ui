<template>
  <div :class="classes" @click="handleClick">
    <span v-if="$parent.underlineWidth" :class="['vx-tab-item-text']">
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
      let array = ['vx-flexbox-item', 'vx-tab-item']
      if (this.$parent.active === this.name) {
        array.push('is-active')
        array.push(this.$parent.activeClass)
      }
      return array
    }
  }
}
</script>
