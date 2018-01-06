<template>
  <div :class="classes" @click="clickHandler">
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
    clickHandler (e) {
      this.$emit('on-change', this.index)
      this.$emit('click', e)
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
