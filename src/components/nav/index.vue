<template>
  <div :class="classes">
    <flexbox class="nav" align="center">
      <button :class="['btn-pull',$cssPrefix + 'header-back']" @click="handleBack" v-if="back!==false">
        <arrow direction="right" :color="arrow.color" :size="arrow.size"/>
      </button>
      <flexbox-item :class="[$cssPrefix + 'header-title', back===false ? $cssPrefix + 'header-title-center' : '']">
        <slot name="title"></slot>
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
  componentName: 'XNav',
  components: {
    Flexbox,
    FlexboxItem,
    Arrow
  },
  props: {
    back: {
      type: [String, Boolean, Function, Object],
      default: true
    },
    backText: {
      type: String,
      default: '返回'
    },
    arrow: {
      type: Object,
      default () {
        return {
          size: '10px',
          color: '#fff'
        }
      }
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'header']
    }
  },
  methods: {
    handleBack () {
      if (this.back === true) {
        history.back()
      } else if (typeof this.back === 'function') {
        this.back()
      } else {
        this.$router.push(this.back)
      }
    }
  }
}
</script>
