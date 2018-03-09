<template>
  <div class="qr-code" style="display:inline-block"></div>
</template>

<script>
export default {
  componentName: 'Qrcode',
  props: {
    text: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 200
    },
    width: {
      type: Number,
      default: 200
    }
  },
  mounted () {
    require.ensure([], (r) => {
      let QRCode = require('qrcodejs2')
      this.$qrcode = new QRCode(this.$el, {
        ...this.$props
      })
    })
  },
  watch: {
    text (value) {
      if (this.$qrcode) {
        this.$qrcode.clear()
        this.$qrcode.makeCode(value)
      }
    }
  }
}
</script>
