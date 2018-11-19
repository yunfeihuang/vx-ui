<template>
  <div :class="['vx-accordion']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: 'Accordion',
  props: {
    mutex: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      value: []
    }
  },
  methods: {
    open (name) {
      if (!this.mutex) {
        if (this.value.indexOf(name) === -1) {
          this.value.push(name)
        } else {
          this.close(name)
        }
      } else {
        this.value = this.value[0] === name ? [] : [name]
      }
    },
    close (name) {
      this.value = this.value.filter(item => {
        return item !== name
      })
    }
  }
}
</script>
