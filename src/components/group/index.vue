<template>
  <div :class="classes">
    <div v-if="title" :class="['vx-group-title']">{{title}}</div>
    <div :class="['vx-group-inner']">
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
      return ['vx-group']
    }
  }
}
</script>
