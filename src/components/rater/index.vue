<template functional>
  <div :class="['vx-rater',{'is-disabled': props.disabled}]">
    <span
      v-for="(item,index) in props.max"
      :class="['vx-rater--item',{'is-active':item<=props.value}]"
      :style="{color: item <= props.value && props.color ? props.color : '', marginLeft: props.gutter}"
      :data-value="item"
      :key="index"
      v-html="props.star"
      @click="$options.methods.handleChange(listeners, item, props.value)"
      >
    </span>
  </div>
</template>

<script>
import { input } from 'utils/mixins'
export default {
  name: 'Rater',
  componentName: 'Rater',
  props: {
    ...input.props,
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
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
    handleChange (listeners, value, oldValue) {
      value === 1 && oldValue === value && (value = 0)
      listeners['input'] && listeners['input'](value)
      listeners['change'] && listeners['change'](value)
    }
  }
}
</script>
