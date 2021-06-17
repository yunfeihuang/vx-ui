<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav>
        <template v-slot:title>
          <vx-button-tab class="tab-button" v-model:active="active1" size="small" style="width:2.8rem;margin:auto">
            <vx-button-tab-item name="tab1">选项1</vx-button-tab-item>
            <vx-button-tab-item name="tab2">选项2</vx-button-tab-item>
          </vx-button-tab>
        </template>
      </vx-nav>
    </template>
    <vx-page-body  style="padding:0.2rem;">
      <vx-button-tab v-model:active="active2">
        <vx-button-tab-item name="tab1">选项1</vx-button-tab-item>
        <vx-button-tab-item name="tab2">选项2</vx-button-tab-item>
        <vx-button-tab-item name="tab3">选项3</vx-button-tab-item>
        <vx-button-tab-item name="tab4">选项4</vx-button-tab-item>
      </vx-button-tab>
      {{active2}}
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      active1: 'tab1',
      active2: 'tab1'
    }
  }
}
</script>

<style lang="scss">

</style>
