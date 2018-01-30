<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">QrCode</div>
    </x-nav>
    <x-body slot="body">
      <div class="qrcode-demo">
        <qr-code :text="text"/>
      </div>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      text: 'http://vue.bittyos.com/'
    }
  }
}
</script>

<style lang="scss">
  .qrcode-demo{
    text-align:center;
    padding:1rem;
  }
</style>
