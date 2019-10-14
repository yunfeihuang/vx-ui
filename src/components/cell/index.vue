<template functional>
  <div :class="['vx-cell', {'is-divider': props.divider}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners"
    @click="props.onTo(parent, props.to, props.replace, props.target)">
    <flexbox
      align="center"
      justify="center"
      class="vx-cell--inner"
      :gutter="0">
      <div class="vx-cell--hd" v-if="$slots['icon']">
        <slot name="icon"></slot>
      </div>
      <flexbox-item class="vx-cell--bd">
        <slot v-if="$slots['title']" name="title"></slot>
        <template v-else>
          {{props.title}}
        </template>
      </flexbox-item>
      <div class="vx-cell--ft">
        <div class="vx-cell--value">
          <slot v-if="$slots['value']" name="value"></slot>
          <template v-else>
            {{props.value}}
          </template>
        </div>
      </div>
      <arrow class="vx-cell--arrow" v-if="props.arrow || props.to" :direction="props.arrowDirection || 'right'" size="0.2rem"></arrow>
    </flexbox>
    <div class="vx-cell--default-slot" v-if="$slots['default']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
  name: 'Cell',
  componentName: 'Cell',
  components: {
    Flexbox,
    FlexboxItem
  },
  props: {
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
              parent.$router.replace(this.to)
            } else {
              parent.$router.push(this.to)
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
