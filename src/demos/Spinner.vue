<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Spinner</div>
    </x-nav>
    <x-body slot="body" class="spinner-demo">
      <spinner></spinner>
      <br/>
      <br/>
      <br/>
      <spinner style="height:50px;width:50px;">
        <span style="line-height:50px;">LOGO</span>
      </spinner>
    </x-body>
  </layout>
</template>

<script>

export default {}
</script>

<style lang="scss">
  .spinner-demo{
    background:#fff;
    padding:20px;
    text-align:center;
  }
</style>
