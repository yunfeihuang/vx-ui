<template>
  <div class="vx-search-wrapper">
    <div :class="['vx-search-inner',{'vx-search-fixed' : fixed}]">
      <form @submit="handleSubmit">
        <flexbox class="vx-search">
          <button class="vx-search-cancel" type="button" @click="handleCancel" v-if="fixed">
            <arrow direction="left" color="#fff" size="0.24rem"/>
          </button>
          <x-input
            class="vx-flexbox-item"
            native-type="search"
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
            @focus="handleFocus"
            @blur="handleBlur"
            @keyup="handleKeyup"
            @keydown="handleKeydown"
            @input="handleInput"
            @change="handleChange"
          >
            <icon slot="icon" class="vx-search-icon">&#xe651;</icon>
          </x-input>
          <button class="vx-search-button" type="submit" v-if="fixed">搜索</button>
        </flexbox>
      </form>
      <flexbox-item class="vx-search-container" v-if="fixed">
        <div v-if="!value" class="keywords">
          <slot name="keywords" v-bind="{search: this.handleKeywordChange}"></slot>
        </div>
        <div v-if="value">
          <slot name="result"></slot>
        </div>
      </flexbox-item>
    </div>
  </div>
</template>

<script>
import { input, historyPush } from 'utils/mixins'
import XInput from '../input'
import Icon from '../icon'
import {Flexbox, FlexboxItem} from '../flexbox'
import Arrow from '../arrow'
export default {
  componentName: 'Search',
  mixins: [input, historyPush],
  components: {
    XInput,
    Flexbox,
    FlexboxItem,
    Icon,
    Arrow
  },
  props: {
    history: {
      type: Boolean,
      default: true
    },
    fixedTop: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    isFocus (value) {
      value && (this.fixed = true)
    },
    fixed (value) {
      if (value) {
        this.pushState()
      } else {
        this.goBack()
      }
    }
  },
  destroyed () {
    this.childFixed && this.childFixed.parentNode.removeChild(this.childFixed)
  },
  data () {
    return {
      fixed: false
    }
  },
  methods: {
    handleFocus (e) {
      this.isFocus = true
      if (this.fixedTop && this.$el.children[0]) {
        this.fixed = true
        this.childFixed = this.$el.children[0]
        this.childFixed && document.body.appendChild(this.childFixed)
        this.childFixed.querySelector('input').focus()
      }
      this.$emit('focus', e)
    },
    handleInput (value) {
      this.$emit('input', value)
    },
    handleChange (value) {
      this.$emit('input', value)
    },
    handleCancel () {
      this.fixed = false
      this.childFixed && this.$el.appendChild(this.childFixed)
    },
    handleKeywordChange (value) {
      this.$emit('input', value).$emit('submit', value)
    },
    handleSubmit (e) {
      e.stopPropagation()
      e.preventDefault()
      this.value && this.$emit('submit', this.value)
    },
    popStateBack () {
      this.handleCancel()
    }
  }
}
</script>
