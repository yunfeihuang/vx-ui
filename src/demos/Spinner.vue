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
import {
  Layout,
  XNav,
  XBody,
  Spinner
} from 'components'

export default {
  components: {
    Layout,
    XNav,
    XBody,
    Spinner
  }
}
</script>

<style lang="scss">
  .spinner-demo{
    background:#fff;
    padding:20px;
    text-align:center;
  }
</style>
