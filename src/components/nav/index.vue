<template functional>
  <div
    :class="['vx-nav', `vx-nav--${props.type}`, {'is-back-text': !!props.backText}, data.staticClass]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <flexbox class="vx-nav--inner" align="center" :gutter="0">
      <slot name="prepend"></slot>
      <button :class="['btn-pull','vx-nav--back']" @click="props.onBack(parent, props.to)" v-if="props.isBack!==false">
        <arrow direction="left" :color="props.type === 'primary' ? props.arrow.primaryColor : props.arrow.color" :size="props.arrow.size"/>
        <span v-if="backText">{{props.backText}}</span>
      </button>
      <flexbox-item :class="['vx-nav--title', {'vx-nav--title-center': props.isBack===false}]">
        <slot v-if="$slots.title" name="title"></slot>
        <template v-else>{{data.attrs.title}}</template>
      </flexbox-item>
      <slot name="pull"></slot>
    </flexbox>
    <slot></slot>
  </div>
</template>

<script>
import {Flexbox, FlexboxItem} from '../flexbox'
import Arrow from '../arrow'
export default {
  name: 'XNav',
  componentName: 'XNav',
  components: {
    Flexbox,
    FlexboxItem,
    Arrow
  },
  props: {
    to: {},
    type: {
      type: String,
      default: 'default'
    },
    isBack: {
      type: Boolean,
      default: true
    },
    onBack: {
      type: Function,
      default (parent, to) {
        if (to && parent.$router) {
          parent.$router.push(to)
        } else {
          history.back()
        }
      }
    },
    backText: {
      type: String,
      default: ''
    },
    arrow: {
      type: Object,
      default () {
        return {
          size: '0.24rem',
          color: '#666',
          primaryColor: '#fff'
        }
      }
    }
  }
}
</script>
