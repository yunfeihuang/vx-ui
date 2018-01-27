<template>
  <div :class="classes" :disabled="disabled">
    <span 
      v-for="item in max"
      :class="[$cssPrefix + 'rater-item',item<=value?$cssPrefix + 'rater-item-active':'']"
      :style="{color: item <= value && color ? color : '', marginLeft: gutter}"
      :data-value="item"
      v-html="star"
      @click="handleChange(item)"
      >
    </span>
  </div>
</template>

<script>
export default {
  name: 'Rater',
  computed: {
    classes () {
      return [this.$cssPrefix + 'rater']
    }
  },
  props: {
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
    handleChange (value) {
      if (!this.disabled) {
        if (value !== 1 && value === this.value) {
          return false
        }
        value === 1 && this.value === value && (value = 0)
        this.$emit('input', value).$emit('on-change', value)
      }
    }
  }
}
</script>
