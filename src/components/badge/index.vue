<template>
  <span :class="classes" v-html="myText"></span>
</template>

<script>
export default {
  componentName: 'Badge',
  computed: {
    classes () {
      return ['vx-badge', this.text === '' ? 'vx-badge-dot' : '']
    },
    myText () {
      if (typeof this.text === 'number' && this.max) {
        if (this.text > this.max) {
          return `<span class="badge-ellipsis"></span>`
        }
      }
      return this.text
    }
  },
  props: {
    text: {
      type: [String, Number],
      default: ''
    },
    max: {
      type: Number,
      default: 9
    }
  }
}
</script>
