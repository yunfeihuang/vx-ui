<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Spinner</div>
    </x-nav>
    <x-body slot="body" class="spinner-demo">
      <spinner></spinner>
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
