<template>
  <div :class="classes" @click="handleClick">
    <div :class="'vx-actionsheet-item-text'" :disabled="disabled">
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
        'vx-actionsheet-item',
        this.checked ? 'vx-actionsheet-item-active' : '',
        this.disabled ? 'vx-actionsheet-item-disabled' : ''
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
