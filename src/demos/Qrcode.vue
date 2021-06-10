<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Qrcode"></vx-nav>
    </template>
    <vx-page-body  style="text-align:center;padding:1rem;">
      <qrcode text="http://vue.bittyos.com/"/>
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
}
</script>
<style lang="scss">

</style>
