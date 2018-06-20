<template>
  <form class="vx-form" @submit="handleSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  componentName: 'XForm',
  props: {
    model: {
      type: Object
    },
    submit: {
      type: Function
    }
  },
  provide () {
    return {
      xForm: this
    }
  },
  data () {
    return {
      fields: []
    }
  },
  methods: {
    addField (field) {
      this.fields.push(field)
    },
    removeField (field) {
      this.fields.splice(this.fields.indexOf(field), 1)
    },
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    clearValidate () {
      this.fields.forEach(field => {
        field.clearValidate()
      })
    },
    validate (cb) {
      let count = 0
      let valid = true
      // let toast = null
      this.fields.forEach((field, index) => {
        field.validate((message) => {
          count++
          if (message) {
            valid = false
            /*
            if (!toast && this.$toast) {
              toast = this.$toast({
                content: message
              })
            }
            */
          }
          if (this.fields.length === count) {
            cb && cb(valid)
          }
        })
      })
    },
    handleSubmit (e) {
      e.preventDefault()
      if (this.submit) {
        this.validate(valid => {
          valid && this.submit()
        })
      }
    }
  }
}
</script>

