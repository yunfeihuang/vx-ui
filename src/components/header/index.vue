<template>
  <div :class="_clas" :style="styles">
    <div :class="[cssPrefix + 'header-nav']">
      <button :class="['btn-pull',cssPrefix + 'header-back']" @click="backHandler" v-if="back!==false">
        <i class="iconfont">&#xe660;</i>
      </button>
      <div :class="[cssPrefix + 'header-title']">
        <slot name="title"></slot>
      </div>
      <slot name="pull"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { base } from 'utils/mixins.js'
export default {
  mixins: [base],
  props: {
    back: {
      type: [String, Boolean],
      default: true
    },
    backText: {
      type: String,
      default: '返回'
    }
  },
  computed: {
    _clas () {
      return [cssPrefix + 'header', this.clas]
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
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &header{
      background:#fff;
      &-nav{
        color:#fff;
        background-color:$primary-color;
        display:flex;
        align-items:center;
        height:2.7rem;
      }
      .btn-pull{
        color:inherit;
        height:inherit;
        min-width: 40px;
        text-align: center;
        @include button;
        @include active;
      }
      &-back{
        margin-right:-10px;
        position:relative;
        z-index:1;
        &:active{
          background:transparent!important;
        }
      }
      &-title{
        flex:1;
        font-size:1.1rem;
        overflow: hidden;
      }
    }
  }
</style>
