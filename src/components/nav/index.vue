<template functional>
  <div :class="['vx-nav', {'is-back-text': !!props.backText}]">
    <flexbox class="vx-nav-inner" align="center">
      <button :class="['btn-pull','vx-nav-back']" @click="props.onBack" v-if="props.isBack!==false">
        <arrow direction="left" :color="props.arrow.color" :size="props.arrow.size"/>
        <span v-if="backText">{{props.backText}}</span>
      </button>
      <flexbox-item :class="['vx-nav-title', props.isBack===false ? 'vx-nav-title-center' : '']">
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
    isBack: {
      type: Boolean,
      default: true
    },
    onBack: {
      type: Function,
      default () {
        history.back()
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
          color: '#fff'
        }
      }
    }
  }
}
</script>
