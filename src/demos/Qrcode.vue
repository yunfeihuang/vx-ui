<template>
  <layout>
    <x-nav slot="header" back="/" title="Qrcode"></x-nav>
    <x-body slot="body" style="text-align:center;padding:1rem;">
      <qrcode text="http://vue.bittyos.com/"/>
    </x-body>
  </layout>
</template>
<script>
import Qrcode from '../components/qrcode' // import Qrcode from 'vx-ui/lib/qrcode'
export default {
  components: {
    Qrcode
  }
}
</script>
<style lang="scss">

</style>
