<template>
    <div class="vx-search--wrapper">
      <div :class="['vx-search--inner']">
        <form @submit="handleSubmit">
          <div class="vx-search">
            <vx-input
              class="vx-search--input"
              native-type="search"
              :placeholder="placeholder"
              
              :modelValue="modelValue"
              :disabled="disabled"
              :autocomplete="autocomplete"
              :autofocus="autofocus"
              :maxlength="maxlength"
              :name="name"
              :clearable="clearable"
              @focusin="handleFocusIn"
              @focusout="handleFocusOut"
              @update:modelValue="handleInput"
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
                :modelValue="modelValue"
                :disabled="disabled"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                :maxlength="maxlength"
                :name="name"
                :clearable="clearable"
                @update:modelValue="handleInput">
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
import { input, useHistory } from '@/utils/mixins'
import VxInput from '../input'
import VxArrow from '../arrow'
import { ref, watch } from 'vue'

export default {
  name: 'VxSearch',
  components: {
    VxInput,
    VxArrow
  },
  props: {
    ...input.props,
    history: {
      type: Boolean,
      default: true
    },
    fixedTop: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { emit }) {
    const el = ref(null)
    const isFocus = ref(null)
    const fixed = ref(false)
    const handleCancel = () => {
      isFocus.value = fixed.value = false
    }
    const instance = useHistory(props, { emit }, handleCancel)
    watch(() => isFocus.value, val => {
      val && props.fixedTop && (fixed.value = true)
    })
    watch(() => fixed.value, val => {
      if (val) {
        instance.pushState()
      } else {
        instance.goBack()
      }
    })
    const handleFocusIn = () => {
      isFocus.value = true
    }
    const handleInput = (value) => {
      emit('update:modelValue', value)
    }
    const handleKeywordChange = (value) => {
      emit('update:modelValue', value)
      emit('submit', value)
    }
    const handleSubmit = (e) => {
      e.stopPropagation()
      e.preventDefault()
      props.modelValue && emit('submit', props.modelValue)
    }
    return {
      el,
      fixed,
      handleFocusIn,
      handleInput,
      handleCancel,
      handleKeywordChange,
      handleSubmit
    }
  }
}
</script>
