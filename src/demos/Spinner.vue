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
      <spinner :style="{height:'1rem',width:'1rem'}">
        <span style="line-height:1rem;">LOGO</span>
      </spinner>
    </x-body>
  </layout>
</template>

<script>

import { children } from 'utils/mixins/page'
export default {
  mixins: [children]
}
</script>

<style lang="scss">
  .spinner-demo{
    background:#fff;
    padding:20px;
    text-align:center;
  }
</style>
