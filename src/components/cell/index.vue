<template>
  <component :is="$attrs.to ? 'router-link' : 'div'" tag="'div'" :class="['vx-cell', `vx-cell--${type}`, {'is-divider': type!='info' && divider}]" v-bind="$attrs" v-on="$attrs">
    <div
      class="vx-cell--inner">
      <div class="vx-cell--hd" v-if="$slots['icon']">
        <slot name="icon"></slot>
      </div>
      <div class="vx-cell--bd">
        <slot v-if="$slots['title']" name="title"></slot>
        <template v-else>
          {{title}}
        </template>
      </div>
      <div class="vx-cell--ft">
        <div class="vx-cell--value">
          <slot v-if="$slots['value']" name="value"></slot>
          <template v-else>
            {{value}}
          </template>
        </div>
      </div>
      <vx-arrow class="vx-cell--arrow" v-if="arrow || $attrs.to" :direction="arrowDirection || 'right'" size="0.2rem"/>
    </div>
    <div class="vx-cell--default-slot" v-if="$slots['default']">
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  name: 'VxCell',
  props: {
    type: {
      type: String,
      default: 'menu'
    },
    arrow: {
      type: Boolean
    },
    replace: {
      type: Boolean
    },
    title: {
      type: String
    },
    value: {
      type: String
    },
    divider: {
      type: Boolean,
      default: true
    },
    target: {
      type: String
    },
    arrowDirection: {
      type: String
    }
  }
}
</script>
