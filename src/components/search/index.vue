<template>
  <div :class="classes">
    <div :class="[$cssPrefix + 'search-inner',this.fixed ? $cssPrefix+'search-fixed flexbox' : '']">
      <form @submit="handleSubmit">
        <flexbox :class="[$cssPrefix + 'search']">
          <button :class="[$cssPrefix + 'search-cancel']" type="button" @click="handleCancel" v-if="fixed">
            <icon>&#xe660;</icon>
          </button>
          <x-input
            :class="$cssPrefix +'flexbox-item'"
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
            <icon slot="icon" :class="[$cssPrefix + 'search-icon']">&#xe651;</icon>
          </x-input>
          <button :class="[$cssPrefix + 'search-button']" type="submit" v-if="fixed">
            搜索
          </button>
        </flexbox>
      </form>
      <flexbox-item :class="[$cssPrefix + 'search-container']" v-if="fixed">
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
import { input, historyPush } from 'utils/mixins.js'
import XInput from '../input'
import Icon from '../icon'
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
  componentName: 'Search',
  mixins: [input, historyPush],
  components: {
    XInput,
    Flexbox,
    FlexboxItem,
    Icon
  },
  props: {
    history: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes () {
      return [this.$cssPrefix + 'search-wrapper']
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
      this.isFocus = this.fixed = true
      if (this.$el.children[0]) {
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
