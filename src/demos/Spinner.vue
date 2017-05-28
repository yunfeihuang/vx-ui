<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Spinner</div>
    </x-header>
    <x-body slot="body" class="spinner-demo">
      <spinner></spinner>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Spinner
} from 'components'

export default {
  components: {
    Layout,
    XHeader,
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
