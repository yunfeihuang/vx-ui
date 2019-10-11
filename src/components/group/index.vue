<template>
  <div :class="['vx-group', {'is-heading': headingType || $slots['heading']}]">
    <slot v-if="$slots['heading']" name="heading"></slot>
    <heading v-if="headingType" :type="headingType">
      <slot name="heading-prepend" slot="prepend"></slot>
      <template>
        <slot name="title" v-if="$slots['title']"></slot>
        <template v-else>{{title}}</template>
      </template>
      <slot name="heading-append" slot="append"></slot>
    </heading>
    <div v-else class="vx-group--title">
      <slot name="title" v-if="$slots['title']"></slot>
      <template v-else>{{title}}</template>
    </div>
    <slot name="prepend"></slot>
    <div class="vx-group--inner">
      <slot v-if="$slots['default']"></slot>
      <template v-else-if="!$slots['prepend'] && !$slots['append']">
        <slot v-if="$slots['placeholder']" name="placeholder"></slot>
        <div class="vx-group--placeholder">
          {{placeholder}}
        </div>
      </template>
    </div>
    <slot name="append"></slot>
  </div>
</template>

<script>
export default {
  name: 'Group',
  componentName: 'Group',
  props: {
    headingType: {
      type: String
    },
    title: {
      type: String
    },
    placeholder: {
      type: String,
      default: '暂无数据'
    }
  }
}
</script>
