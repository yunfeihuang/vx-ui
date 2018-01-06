<template>
  <div :class="classes" @click="changeHandler" :disabled="disabled">
    <span 
      v-for="item in max"
      :class="[cssPrefix + 'rater-item',item<=value?cssPrefix + 'rater-item-active':'']"
      :style="{color: item <= value && color ? color : '', marginLeft: margin}"
      :data-value="item"
      v-html="star"
      >
    </span>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  name: 'Rater',
  computed: {
    classes () {
      return [cssPrefix + 'rater']
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
    margin: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeHandler (e) {
      if (!this.disabled) {
        let value = Number(e.target.dataset.value)
        if (value !== 1 && value === this.value) {
          return false
        }
        value === 1 && this.value === value && (value = 0)
        this.$emit('on-change', value).$emit('input', value)
      }
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
