<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">QrCode</div>
    </x-nav>
    <x-body slot="body">
      <div class="qrcode-demo">
        <qrcode text="http://vue.bittyos.com/"/>
      </div>
    </x-body>
  </layout>
</template>

<style lang="scss">
  .qrcode-demo{
    text-align:center;
    padding:1rem;
  }
</style>
