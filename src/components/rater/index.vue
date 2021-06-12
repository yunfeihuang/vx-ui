<template>
  <div :class="['vx-rater',{'is-disabled': disabled}]" v-bind="$attrs">
    <span
      v-for="(item,index) in max"
      :class="['vx-rater--item',{'is-active':item<=modelValue}]"
      :style="{color: item <= modelValue && color ? color : '', marginLeft: gutter}"
      :data-value="item"
      :key="index"
      v-html="star"
      @click="handleChange(item, modelValue)"
      >
    </span>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
export default {
  name: 'VxRater',
  props: {
    ...input.props,
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 5
    },
    star: {
      type: String,
      default: '★'
    },
    color: {
      type: String
    },
    gutter: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleChange (value, oldValue) {
      value === 1 && oldValue === value && (value = 0)
      this.$emit('update:modelValue', value)
      this.$emit('change', value)
    }
  }
}
</script>
