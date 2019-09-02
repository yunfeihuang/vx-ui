<template>
  <div class="vx-qrcode" style="display:inline-block"></div>
</template>

<script>
export default {
  name: 'Qrcode',
  componentName: 'Qrcode',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  mounted () {
    import('qrcodejs2').then(QRCode => {
      this.$$qrcode = new QRCode(this.$el, {
        height: this.$el.offsetHeight || 140,
        width: this.$el.offsetWidth || 140,
        ...this.$props
      })
    })
  },
  watch: {
    text (value) {
      if (this.$$qrcode) {
        this.$$qrcode.clear()
        this.$$qrcode.makeCode(value)
      }
    }
  }
}
</script>
