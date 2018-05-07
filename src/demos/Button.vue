<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title" >Button</div>
    </x-nav>
    <x-body class="demos" slot="body"  style="background:#fff">
      <div class="button-demo">
        <x-button ref="button">default</x-button>
        <x-button type="primary">primary</x-button>
        <x-button type="danger">danger</x-button>
        <x-button type="warning">warning</x-button>
        <x-button type="primary" plain>plain primary</x-button>
        <x-button type="danger" plain>plain danger</x-button>
        <x-button type="warning" plain>plain warning</x-button>
        <x-button disabled>disabled</x-button>
        <x-button type="primary" :loading="true">primary</x-button>
        <x-button type="primary" disabled>primary disabled</x-button>
        <x-button type="danger" plain disabled>plain danger disabled</x-button>
        <br />
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
    overflow:hidden;
    button{
      margin-top:20px;
    }
  }
</style>
