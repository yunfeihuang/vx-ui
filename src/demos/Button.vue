<template>
  <layout>
    <x-nav slot="header">
      <div slot="title" >XButton</div>
    </x-nav>
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
  XNav,
  XBody,
  XButton
} from 'components'
export default {
  components: {
    Layout,
    XNav,
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
    padding:0 0.15rem;
    button{
      margin-top:20px;
    }
  }
</style>
