<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title" >Button</div>
    </x-nav>
    <x-body class="demos" slot="body"  style="background:#fff">
      <div class="button-demo">
        <x-button ref="button">default</x-button>
        <x-button type="primary">primary</x-button>
        <x-button type="dashed">dashed</x-button>
        <x-button type="warning">warning</x-button>
        <x-button type="primary" disabled>disabled</x-button>
      </div>
    </x-body>
  </layout>
</template>

<script>
export default {
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
