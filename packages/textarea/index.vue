<template>
  <label ref="el" :class="['vx-textarea--wrapper', `vx-textarea--size-${size}`, {'is-disabled':disabled,'is-focus': isFocus, 'vx-textarea--enter-number': showWordNumber}]">
    <div class="vx-textarea--inner">
      <div class="vx-textarea--shadow" v-html="modelValue.replace(/(\r|\n)$/, `<br/><span style='color:transparent'>s</span>`).replace(/(\r|\n)/g, '<br/>')"></div>
        <textarea
          v-bind="$props"
          v-on="$attrs"
          :value="modelValue"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          ></textarea>
      </div>
      <span v-if="showWordNumber && maxlength">
        {{modelValue.length}}/{{maxlength}}
      </span>
  </label>
</template>

<script>
import { input } from '@/utils/mixins'
import { watch, ref, nextTick, onMounted } from 'vue'
export default {
  name: 'VxTextarea',
  props: {
    ...input.props,
    showWordNumber: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    const el = ref(null)
    const isFocus = ref(false)
    const autoHeight = () => {
      nextTick(() => {
        el.value.querySelector('.vx-textarea--inner').style.height = el.value.querySelector('.vx-textarea--shadow').offsetHeight + 'px'
      })
    }
    const handleFocus = () => {
      isFocus.value = true
      emit('focus')
    }
    const handleBlur = () => {
      isFocus.value = false
      emit('blur')
    }
    const handleInput = (e) => {
      let value = e.target.value
      emit('update:modelValue', value)
    }
    watch(() => props.modelValue, () => {
      autoHeight()
    })
    onMounted(() => {
      setTimeout(() => {
        autoHeight()
      })
    })
    return {
      el,
      isFocus,
      handleFocus,
      handleBlur,
      handleInput
    }
  }
}
</script>
