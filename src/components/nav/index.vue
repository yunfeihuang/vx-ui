<template functional>
  <div :class="['vx-nav', `vx-nav--${props.type}`, {'is-back-text': !!props.backText}, {'is-title-center': props.titleCenter, 'is-search-collapse': props.searchCollapse}, data.staticClass]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners">
    <div class="vx-nav--inner">
      <flexbox class="vx-nav--layout" align="center" :gutter="0">
        <button :class="['vx-nav--button','vx-nav--back']" @click="props.onBack(parent, props.to)" v-if="props.isBack">
          <arrow direction="left" :color="props.type === 'primary' ? props.arrow.primaryColor : props.arrow.color" :size="props.arrow.size"/>
          <span v-if="backText">{{props.backText}}</span>
        </button>
        <template v-if="$slots['append'] && props.titleCenter">
          <div class="vx-nav--button" v-for="(item,index) in Object.keys($slots['append']).length - (props.isBack ? 1 : 0)" :key="index"></div>
        </template>
        <slot name="prepend"></slot>
        <flexbox-item v-if="$slots.title">
          <slot name="title"></slot>
        </flexbox-item>
        <flexbox-item v-else :class="['vx-nav--title']">
          <template>{{data.attrs.title}}</template>
        </flexbox-item>
        <template v-if="props.titleCenter">
          <div class="vx-nav--button" v-if="props.isBack && !$slots['append']"></div>
          <slot v-else name="append"></slot>
        </template>
        <slot v-else name="append"></slot>
      </flexbox>
      <div v-if="$slots['search']" class="vx-nav--search" :style="$options.methods.searchStyle(props, $slots)">
        <div class="vx-nav--search-inner">
          <slot name="search"></slot>
        </div>
      </div>
    </div>
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
    },
    titleCenter: {
      type: Boolean
    },
    searchCollapse: {
      type: Boolean
    }
  },
  methods: {
    searchStyle (props, slots) {
      if (!props.searchCollapse) {
        return ''
      } else {
        let max = props.isBack ? 1 : 0
        if (slots['prepend']) {
          if (slots['prepend'].length + max > max) {
            max = slots['prepend'].length + max
          }
        }
        if (slots['append']) {
          if (slots['append'].length > max) {
            max = slots['append'].length
          }
        }
        if (max) {
          return `margin: -0.92rem ${0.92 * max}rem 0 ${0.92 * max}rem`
        } else {
          return `margin: -0.92rem 0.2rem 0 0.2rem`
        }
      }
    }
  }
}
</script>
