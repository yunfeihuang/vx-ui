<template>
  <layout>
    <x-header slot="header">
      <div slot="title" >XButton</div>
    </x-header>
    <x-body class="demos" slot="body"  style="background:#fff">
      <div class="button-demo">
        <x-button>default</x-button>
        <x-button type="primary">primary</x-button>
        <x-button type="dashed">dashed</x-button>
        <x-button type="warning">warning</x-button>
        <x-button type="primary" disabled>disabled</x-button>
      </div>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  XButton
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XButton
  },
  data () {
    return {
      account: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">
  .button-demo{
    padding:0 1rem;
    button{
      margin-top:20px;
    }
  }
</style>
