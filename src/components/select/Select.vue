<template>
  <div :class="['vx-select',`vx-select--size-${size}`, {'is-disabled':disabled}]" @click.stop.prevent="handleFocusIn">
    <div class="vx-select--inner">
      <slot name="prepend"></slot>
      <div class="vx-select--placeholder">
        <span :data-placeholder="placeholder">{{labels}}</span>
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
            <button type="button" :class="['vx-option-picker--placeholder']">{{helpPlaceholder}}</button>
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

export default {
  name: 'VxSelect',
  components: {
    VxArrow
  },
  mixins: [input],
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
  computed: {
    helpPlaceholder () {
      let result = this.popupProps.placeholder
      if (this.value.length >= this.max && this.max > 1) {
        result = `选项不能超过${this.max}个`
      }
      return result
    },
    labels () {
      let result = []
      if (this.max === 1) {
        if (this.$slots && this.$slots.default) {
          let vnode = this.$slots.default()[0]
          if (vnode && vnode.children && vnode.children.find) {
            let item = vnode.children.find(item => item.props.value === this.modelValue)
            if (item) {
              result = [item.props.label]
            }
          }
        }
      } else {
        if (this.$slots && this.$slots.default) {
          let vnode = this.$slots.default()[0]
          if (vnode && vnode.children && vnode.children.find) {
            let list = vnode.children.filter(item => this.modelValue.includes(item.props.value))
            if (list) {
              result = list.map(item => item.props.label)
            }
          }
        }
      }
      result = result.join(this.separator)
      this.$emit('update:label', result)
      return result
    }
  },
  data () {
    return {
      open: false,
      value: this.modelValue,
    }
  },
  methods: {
    handleFocusIn () {
      if (!this.disabled) {
        this.open = true
      }
    },
    handleClear () {
      let val = this.max === 1 ? '' : []
      this.$emit('update:modelValue', val)
    },
    handleConfirm () {
      this.$emit('update:modelValue', this.value)
      this.$nextTick(() => {
        this.open = false
      })
    },
    handleChange (val) {
      if (this.max === 1) {
        this.$emit('update:modelValue', val)
        this.$nextTick(() => {
          this.open = false
        })
      }
    }
  }
}
</script>
