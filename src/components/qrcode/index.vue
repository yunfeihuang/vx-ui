<template>
  <div class="vx-qrcode" style="display:inline-block" ref="el"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'Qrcode',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    let el = ref(null)
    const qrcode = null
    onMounted(() => {
      import('qrcodejs2').then(QRCode => {
        qrcode = new QRCode(el.value, {
          height: el.value.offsetHeight || 140,
          width: el.value.offsetWidth || 140,
          text: props.text
        })
      })
    })
    watch(() => props.text, val => {
      qrcode.clear()
      qrcode.makeCode(val)
    })
    return {
      el
    }
  }
}
</script>
