<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Spinner"></vx-nav>
    </template>
    <vx-page-body  style="text-align:center;">
      <br/>
      <br/>
      <br/>
      <vx-spinner></vx-spinner>
      <br/>
      <br/>
      <br/>
      <vx-spinner style="width:1rem;height:1rem;">
        <span style="line-height:1rem;">LOGO</span>
      </vx-spinner>
    </vx-page-body>
  </vx-page>
</template>

<script>

export default {
}
</script>

<style lang="scss">

</style>
