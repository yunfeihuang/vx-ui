<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Button"></vx-nav>
    </template>
    <vx-page-body class="demos"  style="padding:0.15rem;">
      <vx-button>default</vx-button>
      <vx-button type="primary">primary</vx-button>
      <vx-button type="danger">danger</vx-button>
      <vx-button type="warning">warning</vx-button>
      <vx-button type="primary" size="small">primary small</vx-button>
      <vx-button type="primary" plain>plain primary</vx-button>
      <vx-button type="link">link</vx-button>
      <br />
      <br />
      <vx-button size="large">default large</vx-button>
      <br />
      <vx-button type="primary" size="large">primary large</vx-button>
      <br />
      <vx-button type="danger" square size="large">danger large</vx-button>
      <br />
      <vx-button type="warning" size="large" round>warning large</vx-button>
      <br />
      <vx-button type="primary" size="large" plain>plain primary</vx-button>
      <br />
      <vx-button type="danger" size="large" plain>plain danger</vx-button>
      <br />
      <vx-button type="warning" size="large" plain>plain warning</vx-button>
      <br />
      <vx-button disabled size="large">disabled</vx-button>
      <br />
      <vx-button type="primary" size="large" disabled>primary disabled</vx-button>
      <br />
      <vx-button type="primary" size="large" loading>primary</vx-button>
      <br />
      <vx-button size="large" ripple>default ripple</vx-button>
      <br />
      <vx-button size="large" type="primary" ripple>primary ripple</vx-button>
    </vx-page-body>
  </vx-page>
</template>

<script>

</script>

<style lang="scss">

</style>
