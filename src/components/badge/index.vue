<template>
  <span :class="['vx-badge', {'vx-badge--dot': text === ''}]" v-bind="$attrs">
      <span v-if="typeof text === 'number' && max && text > max" class="badge-ellipsis"></span>
      <template v-else>
        {{text}}
      </template>
    </span>
</template>

<script>
export default {
  name: 'VxBadge',
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
