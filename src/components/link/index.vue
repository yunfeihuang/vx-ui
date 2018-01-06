<template>
  <router-link :class="classes" :to="href">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  computed: {
    classes () {
      return [this.$cssPrefix + 'link', this.active ? this.$cssPrefix + 'link-active' : '']
    }
  },
  props: {
    href: {
      type: [String, Object]
    },
    active: {
      type: Boolean,
      default: true
    }
  }
}
</script>
