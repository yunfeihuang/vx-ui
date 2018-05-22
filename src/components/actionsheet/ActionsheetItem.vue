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
        this.checked ? 'is-active' : '',
        this.disabled ? 'is-disabled' : ''
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
      !this.disabled && this.$emit('action-item', this.value)
    }
  }
}
</script>
