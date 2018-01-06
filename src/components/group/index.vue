<template>
  <div :class="classes">
    <div v-if="title" :class="[cssPrefix+'group-title']">{{title}}</div>
    <div :class="[cssPrefix+'group-inner']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
export default {
  name: 'Group',
  props: {
    title: {
      type: String
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'group']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  }
}
</script>
