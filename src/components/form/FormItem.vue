<template>
  <div :class="classes">
    <flexbox :class="['vx-form-item-inner']" align="center">
      <div v-if="$slots.label" :class="['vx-form-item-label']" :style="{width: labelWidth}">
        <slot name="label"></slot>
      </div>
      <div v-else-if="label" :class="['vx-form-item-label']" :style="{width: labelWidth}">
        {{label}}
      </div>
      <flexbox-item :class="['vx-form-item-control','vx-form-item-align-' + align]">
        <slot></slot>
      </flexbox-item>
    </flexbox>
    <div v-if="validateState === 'error'" :class="['vx-form-item-error']">{{validateMessage}}</div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
import {Flexbox, FlexboxItem} from '../flexbox'
export default {
  componentName: 'XFormItem',
  components: {
    Flexbox,
    FlexboxItem
  },
  props: {
    prop: {
      type: String
    },
    rules: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'right'
    },
    label: {
      type: String
    },
    labelWidth: {
      type: String
    }
  },
  provide () {
    return {
      vxFormItem: this
    }
  },
  inject: ['xForm'],
  computed: {
    classes () {
      return ['vx-form-item', {
        'is-error': this.validateState === 'error',
        'is-validating': this.validateState === 'validating',
        'is-success': this.validateState === 'success',
        'is-required': this.isRequired
      }]
    },
    isRequired () {
      let rules = this.rules
      let isRequired = false
      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true
            return false
          }
          return true
        })
      }
      return isRequired
    },
    getRules () {
      let rules = {}
      if (this.prop) {
        rules[this.prop] = this.rules
      }
      return rules
    }
  },
  data () {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false
    }
  },
  mounted () {
    this.prop && this.xForm && this.xForm.addField(this)
  },
  destroyed () {
    this.prop && this.xForm && this.xForm.removeField(this)
  },
  methods: {
    resetField () {
      this.validateState = ''
      this.validateMessage = ''
      this.validateDisabled = false
    },
    clearValidate () {
      this.validateState = ''
      this.validateMessage = ''
      this.validateDisabled = false
    },
    validate (cb = () => {}) {
      if (this.prop && this.rules) {
        const validator = new AsyncValidator(this.getRules)
        let model = {}
        model[this.prop] = this.xForm.model[this.prop]
        validator.validate(model, {firstFields: true}, (errors, fields) => {
          this.validateState = !errors ? 'success' : 'error'
          this.validateMessage = errors ? errors[0].message : ''
          cb(this.validateMessage)
        })
      } else {
        cb()
      }
    }
  }
}
</script>
