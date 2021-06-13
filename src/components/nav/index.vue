<template>
  <div :class="['vx-nav', `vx-nav--${type}`, {'is-back-text': !!backText}, {'is-title-center': titleCenter, 'is-search-collapse': searchCollapse}]" v-bind="$attrs">
    <div class="vx-nav--inner">
      <div class="vx-nav--layout">
        <button :class="['vx-nav--button','vx-nav--back']" @click="onBack($parent, to)" v-if="isBack">
          <arrow direction="left" :color="type === 'primary' ? arrow.primaryColor : arrow.color" :size="arrow.size"/>
          <span v-if="backText">{{backText}}</span>
        </button>
        <slot name="prepend"></slot>
        <div v-if="$slots.title" :class="['vx-nav--title-slot']">
          <slot name="title"></slot>
        </div>
        <div v-else :class="['vx-nav--title']">
          {{title}}
        </div>
        <template v-if="titleCenter">
          <div class="vx-nav--button" v-if="isBack && !$slots['append']"></div>
          <slot v-else name="append"></slot>
        </template>
        <slot v-else name="append"></slot>
      </div>
      <div v-if="$slots['search']" class="vx-nav--search" :style="searchStyle($slots)">
        <div class="vx-nav--search-inner">
          <slot name="search"></slot>
        </div>
      </div>
    </div>
    <div v-if="$slots['default']" class="vx-nav--default-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Arrow from '../arrow'
export default {
  name: 'VxNav',
  components: {
    Arrow
  },
  props: {
    to: {},
    title: {},
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
    searchStyle (slots) {
      if (!this.searchCollapse) {
        return ''
      } else {
        let max = this.isBack ? 1 : 0
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
