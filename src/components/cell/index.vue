<template>
  <div :class="['vx-cell', `vx-cell--${type}`, {'is-divider': type!='info' && divider}]" v-bind="$attrs"
    @click="onTo($parent, to, replace, target)">
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
      <arrow class="vx-cell--arrow" v-if="arrow || to" :direction="arrowDirection || 'right'" size="0.2rem"></arrow>
    </div>
    <div class="vx-cell--default-slot" v-if="$slots['default']">
      <slot></slot>
    </div>
  </div>
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
    onTo: {
      type: Function,
      default (parent, to, replace, target) {
        if (to) {
          if (typeof to === 'string' && (to.indexOf('http://') > -1 || to.indexOf('https://') > -1)) {
            if (target) {
              window.open(to)
            } else {
              location.href = to
            }
          } else if (parent.$router) {
            if (replace) {
              parent.$router.replace(to)
            } else {
              parent.$router.push(to)
            }
          }
        }
      }
    },
    to: {},
    arrowDirection: {
      type: String
    }
  }
}
</script>
