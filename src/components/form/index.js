import Form from 'element-ui/lib/form'
import FormItem from 'element-ui/lib/form-item'

if (!Form.beforeMount) {
  Form.beforeMount = function () {
    this.$nextTick(function () {
      let self = this
      requestAnimationFrame(function () {
        self.$el.classList.add('vx-form')
      })
    })
  }
}
if (!Form.updated) {
  Form.updated = function () {
    let self = this
    requestAnimationFrame(function () {
      self.$el.classList.add('vx-form')
    })
  }
}
FormItem.props.divider = {
  type: Boolean,
  default: false
}
if (!FormItem.beforeMount) {
  FormItem.beforeMount = function () {
    let self = this
    this.$nextTick(function () {
      requestAnimationFrame(function () {
        self.$el.classList.add('vx-form-item')
      })
      if (this.divider) {
        requestAnimationFrame(function () {
          self.$el.classList.add('is-divider')
        })
      }
    })
  }
}
if (!FormItem.updated) {
  FormItem.updated = function () {
    let self = this
    requestAnimationFrame(function () {
      self.$el.classList.add('vx-form-item')
    })
    if (this.divider) {
      requestAnimationFrame(function () {
        self.$el.classList.add('is-divider')
      })
    } else {
      requestAnimationFrame(function () {
        self.$el.classList.remove('is-divider')
      })
    }
  }
}

export {
  Form,
  FormItem
}
