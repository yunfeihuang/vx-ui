<template>
  <div :class="classes">
    <flexbox class="nav" align="center">
      <button :class="['btn-pull',cssPrefix + 'header-back']" @click="backHandler" v-if="back!==false">
        <icon>&#xe660;</icon>
      </button>
      <flexbox-item :class="[cssPrefix + 'header-title', back===false ? cssPrefix + 'header-title-center' : '']">
        <slot name="title"></slot>
      </flexbox-item>
      <slot name="pull"></slot>
    </flexbox>
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import {Flexbox, FlexboxItem} from '../flexbox'
import Icon from '../icon'
export default {
  name: 'XNav',
  components: {
    Flexbox,
    FlexboxItem,
    Icon
  },
  props: {
    back: {
      type: [String, Boolean, Function],
      default: true
    },
    backText: {
      type: String,
      default: '返回'
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'header']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    backHandler () {
      if (this.back === true) {
        history.back()
      }
      if (typeof this.back === 'string') {
        location.href = this.back
      }
      if (typeof this.back === 'function') {
        this.back()
      }
    }
  }
}
</script>
