<template>
  <div :class="['vx-accordion']">
    <slot></slot>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
export default {
  name: 'VxAccordion',
  props: {
    mutex: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    let keys = ref([])
    const close = (name) => {
      keys.value = keys.value.filter(item => {
        return item !== name
      })
    }
    const open = (name) => {
      if (!props.mutex) {
        if (keys.value.indexOf(name) === -1) {
          keys.value.push(name)
        } else {
          close(name)
        }
      } else {
        keys.value = keys.value[0] === name ? [] : [name]
      }
    }
    provide('vxAccordion', {
      keys,
      open,
      close
    })
  }
}
</script>
