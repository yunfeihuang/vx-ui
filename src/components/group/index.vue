<template>
  <div :class="classes">
    <div v-if="title" :class="[$cssPrefix+'group-title']">{{title}}</div>
    <div :class="[$cssPrefix+'group-inner']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  componentName: 'Group',
  props: {
    title: {
      type: String
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'group']
    }
  }
}
</script>
