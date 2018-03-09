<template>
  <div :class="classes" @click="handleClick">
    <div :class="$cssPrefix + 'actionsheet-item-text'" :disabled="disabled">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  componentName: 'ActionsheetItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    classes () {
      return [
        this.$cssPrefix + 'actionsheet-item',
        this.checked ? this.$cssPrefix + 'actionsheet-item-active' : '',
        this.disabled ? this.$cssPrefix + 'actionsheet-item-disabled' : ''
      ]
    }
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    handleClick () {
      !this.disabled && this.$emit('click', this.value)
    }
  }
}
</script>
