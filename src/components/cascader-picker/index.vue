<template>
  <div class="vx-cascader-picker">
    <div class="vx-cascader-picker--value">
      <div
        v-for="(item,index) in myValueObject"
        :key="index"
        class="vx-cascader-picker--value-item"
        :class="{'is-active': isActive(item.value)}"
        @click="handleSwitch(index, item.value)">
          {{item.label}}
      </div>
    </div>
    <div class="vx-cascader-picker--container">
      <div v-for="(item, index) in myOptions" class="vx-cascader-picker--panel" :key="index" :style="panelStyle(index)">
        <div
          v-for="(_item, _index) in item"
          :key="_index"
          class="vx-cascader-picker--item"
          :class="{'is-active': _item.value == myValue[index],'is-disabled':_item.disabled}"
          @click="handleClick(index,_item)">
          {{_item.label}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CascaderPicker',
  componentName: 'CascaderPicker',
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    label: {
      type: Array
    },
    options: {
      type: Array
    }
  },
  data () {
    return {
      ...this.initialData()
    }
  },
  computed: {
    myValueObject () {
      let result = this.myValue.map((item, index) => {
        return this.myOptions[index].filter(option => {
          return option.value === item
        })[0]
      })
      if (this.myValue.length < this.myOptions.length) {
        result.push({
          label: '请选择',
          value: '__placeholder'
        })
      }
      return result
    }
  },
  watch: {
    value () {
      this.$nextTick(() => {
        Object.assign(this, this.initialData())
      })
    },
    options () {
      this.$nextTick(() => {
        Object.assign(this, this.initialData())
      })
    }
  },
  methods: {
    initialData () {
      let label = []
      let myOptions = []
      myOptions.push(this.options.map(item => {
        return {
          value: item.value,
          label: item.label,
          disabled: item.disabled,
          children: item.children
        }
      }))
      let myValue = [...this.value]
      let currentIndex = myValue.length
      if (myValue.length > 0) {
        let array = this.options
        myValue.forEach((item) => {
          array.forEach(a => {
            if (a.value === item) {
              label.push(a.label)
              if (a.children && a.children.length > 0) {
                myOptions.push(a.children)
                array = a.children
              } else {
                currentIndex = myValue.length - 1
              }
            }
          })
        })
      }
      let currentValue = myValue[currentIndex] || '__placeholder'
      if (this.label !== undefined) {
        this.$emit('update:label', label)
      }
      return {
        myValue,
        myOptions,
        currentIndex,
        currentValue
      }
    },
    panelStyle (index) {
      let x = '0'
      if (index < this.currentIndex) {
        x = '-100%'
      } else if (index > this.currentIndex) {
        x = '100%'
      }
      return {
        transform: `translate3d(${x},0,0)`,
        '-webkit-transform': `translateX(${x}),0,0`
      }
    },
    isActive (value) {
      return this.currentValue === value
    },
    getChildren (index, value) {
      let result = null
      let $item = this.myOptions[index].filter(item => item.value === value)[0]
      if ($item && $item.children) {
        result = $item.children.map(item => {
          return {
            value: item.value,
            label: item.label,
            disabled: item.disabled,
            children: item.children
          }
        })
      }
      return result
    },
    handleClick (index, item) {
      if (!item.disabled) {
        let value = item.value
        let children = this.getChildren(index, value)
        let myValue = [...this.myValue]
        let myOptions = [...this.myOptions]
        let currentValue = value
        if (children) {
          currentValue = '__placeholder'
          if (myOptions[index + 1]) {
            myOptions[index + 1] = children
            myOptions = myOptions.slice(0, index + 2)
          } else {
            myOptions.push(children)
          }
          setTimeout(() => {
            this.currentIndex = index + 1
          }, 32)
        }
        if (myValue[index]) {
          myValue[index] = value
          myValue = myValue.slice(0, index + 1)
        } else {
          myValue.push(value)
        }
        if (!children) {
          if (JSON.stringify(myValue) !== JSON.stringify(this.value)) {
            this.$emit('input', myValue).$emit('change', myValue)
            if (this.label !== undefined) {
              let label = myValue.map((item, index) => {
                return myOptions[index].filter(_item => _item.value === item)[0].label
              })
              this.$emit('update:label', label)
            }
          }
          this.$emit('close')
        }
        this.myOptions = myOptions
        this.myValue = myValue
        this.currentValue = currentValue
      }
    },
    handleSwitch (index, value) {
      this.currentIndex = index
      this.currentValue = value
    }
  }
}

</script>
