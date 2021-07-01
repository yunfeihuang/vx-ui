<template>
  <component :class="classes" :is="tag">
    <slot></slot>
  </component>
</template>

<script>
import { provide, ref, watch } from 'vue'

let flexMap = {
  direction: {
    column: `flexbox--column`
  },
  wrap: {
    wrap: `flexbox--wrap`
  },
  justify: {
    center: `flexbox--content-center`
  },
  align: {
    center: `flexbox--align-center`
  }
}

export default {
  name: 'VxFlexbox',
  props: {
    direction: {
      type: String,
      default: 'normal'
    },
    wrap: {
      type: String,
      default: 'normal'
    },
    justify: {
      type: String,
      default: 'normal'
    },
    align: {
      type: String,
      default: 'normal'
    },
    gutter: {
      type: Number,
      default: 8
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    classes () {
      let array = [
        'vx-flexbox'
      ]
      for (let name in flexMap) {
        if (this[name] && flexMap[name][this[name]]) {
          array.push('vx-' + flexMap[name][this[name]])
        }
      }
      return array
    }
  },
  setup (props) {
    let gutter = ref(props.gutter)
    watch(() => props.gutter, (value) => {
      gutter.value = value
    })
    provide('vxFlexbox', {
      gutter
    })
  }
}
</script>
