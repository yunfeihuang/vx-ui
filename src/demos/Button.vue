<template>
  <layout type="primary">
    <x-nav slot="header" back="/" title="Button"></x-nav>
    <x-body class="demos" slot="body" style="padding:0.15rem;">
      <x-button>default</x-button>
      <x-button type="primary">primary</x-button>
      <x-button type="danger">danger</x-button>
      <x-button type="warning">warning</x-button>
      <x-button type="primary" size="small">primary small</x-button>
      <x-button type="primary" plain>plain primary</x-button>
      <x-button type="link">link</x-button>
      <br />
      <br />
      <x-button size="large">default large</x-button>
      <br />
      <x-button type="primary" size="large">primary large</x-button>
      <br />
      <x-button type="danger" size="large">danger large</x-button>
      <br />
      <x-button type="warning" size="large">warning large</x-button>
      <br />
      <x-button type="primary" size="large" plain>plain primary</x-button>
      <br />
      <x-button type="danger" size="large" plain>plain danger</x-button>
      <br />
      <x-button type="warning" size="large" plain>plain warning</x-button>
      <br />
      <x-button disabled size="large">disabled</x-button>
      <br />
      <x-button type="primary" size="large" disabled>primary disabled</x-button>
      <br />
      <x-button type="primary" size="large" :loading="true">primary</x-button>
      <br />
      <x-button size="large" ripple>default ripple</x-button>
      <br />
      <x-button size="large" type="primary" ripple>primary ripple</x-button>
    </x-body>
  </layout>
</template>

<script>

</script>

<style lang="scss">

</style>
