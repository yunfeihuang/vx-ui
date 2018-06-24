<template functional>
  <flexbox
    :class="['vx-cell', {'vx-cell-access': props.arrow}, data.class, data.staticClass]"
    align="center"
    justify="center"
    :style="data.style"
    v-bind="data.attrs"
    v-on="listeners"
    @click.native="props.onTo(parent, props.to)">
    <div class="vx-cell-hd">
      <slot name="icon"></slot>
    </div>
    <flexbox-item class="vx-cell-bd">
      <slot v-if="!props.title" name="title"></slot>
      <template v-else>
        {{props.title}}
      </template>
    </flexbox-item>
    <div class="vx-cell-ft">
      <slot v-if="!props.value" name="value"></slot>
      <template v-else>
        {{props.value}}
      </template>
    </div>
  </flexbox>
</template>

<script>
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
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
