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
  name: 'TabItem',
  methods: {
    handleClick (e) {
      this.$emit('on-change', this.index)
    }
  },
  computed: {
    classes () {
      let array = [this.$cssPrefix + 'flexbox-item', this.$cssPrefix + 'tab-item']
      if (this.active) {
        array.push(this.$cssPrefix + 'tab-item-active')
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
