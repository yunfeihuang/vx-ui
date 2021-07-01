<template>
  <vx-popup :open="open" :history="history" @close="handleClose" fast-close class="vx-cascader-popup-picker--wrapper">
    <div class="vx-cascader-popup-picker">
      <div class="vx-cascader-picker">
        <div class="vx-cascader-picker--value">
          <div
            v-for="(item,index) in tabs"
            :key="index"
            class="vx-cascader-picker--value-item"
            :class="{'is-active': currentIndex == index}"
            @click="handleSwitch(index, item.value)">
              {{item.label}}
          </div>
        </div>
        <vx-divider></vx-divider>
        <div class="vx-cascader-picker--container">
          <transition v-for="(item, index) in panels" :key="index" name="vx--popup-slide-right">
            <div class="vx-cascader-picker--panel" v-show="index <= currentIndex">
              <div
                v-for="(_item, _index) in item"
                :key="_index"
                class="vx-cascader-picker--item"
                :class="{'is-active': _item.value == value[index],'is-disabled':_item.disabled}"
                @click="handleClick(index,_item)">
                {{_item.label}}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </vx-popup>
</template>

<script>
import { computed, nextTick, ref, watch } from 'vue'
export default {
  name: 'VxCascaderPicker',
  props: {
    modelValue: {
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
    },
    open: {
      type: Boolean
    },
    history: {
      type: Boolean
    }
  },
  setup ( props, { emit } ) {
    const value = ref([...props.modelValue])
    watch(() => props.modelValue, val => {
      value.value = val
    })
    const currentIndex = ref(props.modelValue.length ? props.modelValue.length - 1 : 0)
    const panels = computed(() => {
      let list = [props.options]
      if (value.value && value.value.forEach) {
        let temp = props.options
        value.value.forEach(value => {
          let result = temp.find(item => item.value === value)
          if (result) {
            if (result.children && result.children.length) {
              list.push(result.children)
              temp = result.children
            }
          }
        })
      }
      return list
    })
    const tabs = computed(() => {
      let result = []
      let _panels = panels.value
      if (value.value && value.value.length && value.value.forEach) {
        value.value.forEach((value,i) => {
          if (_panels[i]) {
            let item = _panels[i].find(item => item.value === value)
            item && result.push(item)
          }
        })
      }
      if (result.length < _panels.length) {
        result.push({
          label: '请选择',
          value: '__placeholder'
        })
      }
      return result
    })
    return {
      value,
      currentIndex,
      tabs,
      panels,
      handleClick (index, item) {
        value.value[index] = item.value
        if (item.children && item.children.length) {
          currentIndex.value = index + 1
        } else {
          nextTick(() => {
            emit('update:modelValue', [...value.value])
            emit('update:label', tabs.value.map(item => item.label))
          })
        }
      },
      handleSwitch (index) {
        currentIndex.value = index
      },
      handleClose () {
        emit('update:open', false)
      }
    }
  }
}

</script>
