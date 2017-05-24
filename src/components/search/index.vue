<template>
  <div :class="classes">
    <div :class="[cssPrefix + 'search-inner',this.fixed ? cssPrefix+'search-fixed' : '']">
      <form @submit="submitHandler">
        <div :class="[cssPrefix + 'search']">
          <button :class="[cssPrefix + 'search-cancel']" type="button" @click="cancelHandler" v-if="fixed">
            <i class="iconfont">&#xe660;</i>
          </button>
          <x-input
            htmlType="search"
            :placeholder="placeholder"
            :readonly="readonly"
            :value="value"
            :disabled="disabled" 
            :autocomplete="autocomplete"
            :autofocus="autofocus"
            :maxlength="maxlength"
            :name="name" 
            :clear="clear"
            :required="required"
            @on-focus="focusHandler"
            @on-blur="blurHandler"
            @on-keyup="keyupHandler"
            @on-keydown="keydownHandler" 
            @input="inputHandler"
            @on-change="changeHandler"
          >
            <i slot="icon" :class="['iconfont',cssPrefix + 'search-icon']">&#xe651;</i>
          </x-input>
        </div>
      </form>
      <div :class="[cssPrefix + 'search-container']" v-if="fixed">
        <div v-if="!value" class="keywords" @click="keywordChangeHandler">
          <slot name="keywords"></slot>
        </div>
        <div v-if="value">
          <slot name="result"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'
import XInput from '../input'
export default {
  mixins: [input],
  components: {
    XInput
  },
  destroyed () {
    this.childFixed && this.childFixed.parentNode.removeChild(this.childFixed)
  },
  computed: {
    classes () {
      return [cssPrefix + 'search-wrapper']
    }
  },
  watch: {
    isFocus (value) {
      value && (this.fixed = true)
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      fixed: false,
      yreadonly: true
    }
  },
  methods: {
    focusHandler (e) {
      this.isFocus = this.fixed = true
      if (this.$el.children[0]) {
        this.childFixed = this.$el.children[0]
        this.childFixed && document.body.appendChild(this.childFixed)
        this.childFixed.querySelector('input').focus()
      }
      this.$emit('on-focus', e)
    },
    inputHandler (value) {
      this.$emit('input', value)
    },
    changeHandler (value) {
      this.$emit('input', value)
    },
    cancelHandler () {
      this.fixed = false
      this.childFixed && this.$el.appendChild(this.childFixed)
    },
    keywordChangeHandler (e) {
      let target = e.target.classList.contains('keyword') ? e.target : e.target.closest && e.target.closest('keyword') ? e.target.closest('keyword') : null
      if (target) {
        let value = target.dataset.value || target.innerText
        this.$emit('input', value)
        this.$emit('on-submit', value)
      }
    },
    submitHandler (e) {
      e.stopPropagation()
      e.preventDefault()
      this.value && this.$emit('on-submit', this.value)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &search{
      position:relative;
      background:#ddd;
      padding:1px;
      display:flex;
      .#{$css-prefix}input-wrapper{
        height:1.8rem;
        flex:1;
        margin: 4px;
        input{
          border-radius:1rem;
        }
        &:before,&:after{
          display:none;
        }
        
      }
      .#{$css-prefix}input-clear-button{
        width:40px;
        .iconfont{
          font-size:14px;
        }
      }
      input{
        padding-left:30px;
        -webkit-appearance: none;
        appearance: none;
      }
      input::-webkit-search-cancel-button{
        display:none;
      }
      input::search-cancel-button{
        display:none;
      }
      &-cancel{
        @include button;
        .iconfont{
          font-size:20px;
          position:relative;
          top:2px;
        }
        color:#fff;
      }
    }
    &search-fixed{
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      background: #fff;
      display: flex;
      width: 100%;
      flex-direction: column;
      z-index: 100;
      .#{$css-prefix}search{
        background:$primary-color;
      }
    }
    &search-container{
      flex:1;
      .keywords{
        padding:15px;
        .keyword{
          display:inline-block;
          border:1px solid #eee;
          border-radius:30px;
          vertical-align: middle;
          padding:6px 15px;
          margin:5px;
          @include active;
        }
      }
    }
  }
</style>
