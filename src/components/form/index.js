import Form from 'element-ui/lib/form'
import FormItem from 'element-ui/lib/form-item'

if (!Form.mixins) {
  Form.mixins = []
}
Form.mixins.push({
  mounted () {
    let self = this
    requestAnimationFrame(function () {
      self.$el.classList.add('vx-form')
    })
  },
  updated () {
    let self = this
    requestAnimationFrame(function () {
      self.$el.classList.add('vx-form')
    })
  }
})

if (!FormItem.mixins) {
  FormItem.mixins = []
}

FormItem.mixins.push({
  props: {
    divider: {
      type: Boolean
    },
    block: {
      type: Boolean
    }
  },
  mounted () {
    let self = this
    requestAnimationFrame(function () {
      self.$el.classList.add('vx-form-item')
      if (self.block) {
        self.$el.classList.add('is-block')
      }
    })
  },
  updated () {
    let self = this
    requestAnimationFrame(function () {
      self.$el.classList.add('vx-form-item')
      if (self.block) {
        self.$el.classList.add('is-block')
      }
    })
  }
})

export {
  Form,
  FormItem
}
