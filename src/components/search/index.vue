<template>
    <div class="vx-search--wrapper">
      <div :class="['vx-search--inner']">
        <form @submit="handleSubmit">
          <div class="vx-search">
            <vx-input
              class="vx-search--input"
              native-type="search"
              :placeholder="placeholder"
              :readonly="readonly"
              :value="value"
              :disabled="disabled"
              :autocomplete="autocomplete"
              :autofocus="autofocus"
              :maxlength="maxlength"
              :name="name"
              :clearable="clearable"
              @focusin="handleFocusIn"
              @focusout="handleFocusOut"
              @input="handleInput"
              @change="handleChange"
            >
            </vx-input>
          </div>
        </form>
      </div>
    </div>
    <teleport to="body">
      <div class="vx-search--wrapper" v-if="fixed">
        <div :class="['vx-search--inner','vx-search--fixed']">
          <form @submit="handleSubmit">
            <div class="vx-search">
              <button class="vx-search--cancel" type="button" @click="handleCancel">
                <vx-arrow direction="left" color="#fff" size="0.24rem"/>
              </button>
              <vx-input
                class="vx-search--input"
                native-type="search"
                :placeholder="placeholder"
                :readonly="readonly"
                :value="value"
                :disabled="disabled"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                :maxlength="maxlength"
                :name="name"
                :clearable="clearable"
                @focusin="handleFocusIn"
                @focusout="handleFocusOut"
                @input="handleInput"
                @change="handleChange">
              </vx-input>
              <button class="vx-search--button" type="submit">搜索</button>
            </div>
          </form>
          <div class="vx-search--container" v-if="fixed">
            <div v-if="!value" class="keywords">
              <slot name="keywords" v-bind="{search: this.handleKeywordChange}"></slot>
            </div>
            <div v-if="value">
              <slot name="result"></slot>
            </div>
          </div>
        </div>
      </div>
    </teleport>
</template>

<script>
import { input, historyPush } from '@/utils/mixins'
import VxInput from '../input'
import VxArrow from '../arrow'

export default {
  name: 'VxSearch',
  mixins: [input, historyPush],
  components: {
    VxInput,
    VxArrow
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
      value && this.fixedTop && (this.fixed = true)
    },
    fixed (value) {
      if (value) {
        this.pushState()
      } else {
        this.goBack()
      }
    }
  },
  data () {
    return {
      fixed: false
    }
  },
  methods: {
    handleFocusIn () {
      this.isFocus = true
      this.fixed = true
    },
    handleInput (value) {
      this.$emit('update:modelValue', value)
    },
    handleChange (value) {
      this.$emit('update:modelValue', value)
    },
    handleCancel () {
      this.fixed = false
    },
    handleKeywordChange (value) {
      this.$emit('update:modelValue', value)
      this.$emit('submit', value)
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
