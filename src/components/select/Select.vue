<template>
  <div :class="['vx-select',`vx-select--size-${size}`, {'is-disabled':disabled}]" @click.stop.prevent="handleFocusIn">
    <div class="vx-select--inner">
      <slot name="prepend"></slot>
      <div class="vx-select--placeholder">
        <span :data-placeholder="placeholder">{{innerText}}</span>
      </div>
      <template v-if="!$slots.append">
        <transition v-if="this.clearable && modelValue+''" name="input-clearable-fade">
          <button
            tabindex="-2"
            type="button"
            v-show="!!modelValue && clearable && !disabled"
            class="vx-input--clearable-button"
            @click.stop="handleClear">
            <i class="vx-input--clearable-icon"></i>
          </button>
        </transition>
        <vx-arrow v-else-if="arrow" v-bind="arrowProps" direction="down"/>
      </template>
      <slot v-else name="append"></slot>
    </div>
    <teleport :to="getPopupMounted()">
      <vx-popup v-bind="popupProps" v-model:open="open" class="vx-select--picker">
        <template v-slot:header>
          <div v-if="max != 1" :class="['vx-option-picker--header']">
            <button type="button" class="vx-option-picker--cancel" @click="open=false">{{popupProps && popupProps.cancelText ? popupProps.cancelText : '取消'}}</button>
            <button type="button" :class="['vx-option-picker--placeholder']">{{popupPlaceholder}}</button>
            <button type="button" :class="['vx-option-picker--confirm',{'is-disabled':!value.length}]" @click="handleConfirm">{{popupProps && popupProps.confirmText ? popupProps.confirmText : '确定'}}</button>
          </div>
        </template>
        <div class="vx-option-picker">
          <vx-checkbox-group v-model="value" :max="max" @update:modelValue="handleChange">
            <slot></slot>
          </vx-checkbox-group>
        </div>
      </vx-popup>
    </teleport>
  </div>
</template>

<script>
import { input } from '@/utils/mixins'
import VxArrow from '../arrow'
import { computed, ref } from 'vue'

export default {
  name: 'VxSelect',
  components: {
    VxArrow
  },
  props: {
    ...input.props,
    modelValue: {
      type: [String, Number, Array]
    },
    getPopupMounted: {
      type: Function,
      default () {
        return 'body'
      }
    },
    max: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    popupProps: {
      type: Object,
      default () {
        return {
          placeholder: '请选择',
          cancelText: '取消',
          confirmText: '确定'
        }
      }
    },
    arrow: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: ','
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit, slots }) {
    const open = ref(false)
    const value = ref(props.modelValue)
    const popupPlaceholder = computed(() => {
      let result = props.popupProps.placeholder
      if (value.value.length >= props.max && props.max > 1) {
        result = `选项不能超过${props.max}个`
      }
      return result
    })
    const innerText = computed(() => {
      console.log(slots)
      let result = []
      if (props.max === 1) {
        if (slots && slots.default) {
          let vnode = slots.default()[0]
          if (vnode && vnode.children && vnode.children.find) {
            let item = vnode.children.find(item => item.props.value === props.modelValue)
            if (item) {
              result = [item.props.label]
            }
          }
        }
      } else {
        if (slots && slots.default) {
          let vnode = slots.default()[0]
          if (vnode && vnode.children && vnode.children.find) {
            let list = vnode.children.filter(item => props.modelValue.includes(item.props.value))
            if (list) {
              result = list.map(item => item.props.label)
            }
          }
        }
      }
      result = result.join(props.separator)
      emit('update:label', result)
      return result
    })
    return {
      open,
      value,
      popupPlaceholder,
      innerText,
      handleFocusIn () {
        if (!props.disabled) {
          open.value = true
        }
      },
      handleClear () {
        emit('update:modelValue', props.max === 1 ? '' : [])
      },
      handleConfirm () {
        emit('update:modelValue', value.value)
        open.value = false
      },
      handleChange (val) {
        if (props.max === 1) {
          emit('update:modelValue', val)
          open.value = false
        }
      }
    }
  }
}
</script>
