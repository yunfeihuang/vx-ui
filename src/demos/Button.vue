<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title" >Button</div>
    </x-nav>
    <x-body class="demos" slot="body"  style="background:#fff">
      <div class="button-demo">
        <x-button>default</x-button>
        <x-button type="primary">primary</x-button>
        <x-button type="danger">danger</x-button>
        <x-button type="warning">warning</x-button>
        <x-button type="link">link</x-button>
        <x-button size="large">default large</x-button>
        <x-button type="primary" size="large">primary large</x-button>
        <x-button type="danger" size="large">danger large</x-button>
        <x-button type="warning" size="large">warning large</x-button>
        <x-button type="primary" size="large" plain>plain primary</x-button>
        <x-button type="danger" size="large" plain>plain danger</x-button>
        <x-button type="warning" size="large" plain>plain warning</x-button>
        <x-button disabled size="large">disabled</x-button>
        <x-button type="primary" size="large" disabled>primary disabled</x-button>
        <x-button type="primary" size="large" :loading="true">primary</x-button>
        <x-button size="large" ripple>default ripple</x-button>
        <x-button size="large" type="primary" ripple>primary ripple</x-button>
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
