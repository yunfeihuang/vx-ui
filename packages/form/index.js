import ElForm from 'element-plus/lib/el-form'
import ElFormItem from 'element-plus/lib/el-form-item'
if (!ElForm.mixins) {
  ElForm.mixins = []
}
ElForm.mixins.push({
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

if (!ElFormItem.mixins) {
  ElFormItem.mixins = []
}

ElFormItem.mixins.push({
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
  ElForm,
  ElFormItem
}
