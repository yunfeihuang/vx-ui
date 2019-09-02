<template functional>
  <div :class="['vx-cell', {'vx-cell--access': props.arrow, 'is-divider': props.divider}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners"
    @click="props.onTo(parent, props.to)">
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
      type: Boolean,
      default: true
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
    onTo: {
      type: Function,
      default (parent, to) {
        if (to && parent.$router) {
          parent.$router.push(this.to)
        }
      }
    },
    to: {}
  }
}
</script>
