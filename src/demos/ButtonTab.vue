<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav>
        <template v-slot:title>
          <button-tab class="tab-button" v-model:active="active1" size="small" style="width:2.8rem;margin:auto">
            <button-tab-item name="tab1">选项1</button-tab-item>
            <button-tab-item name="tab2">选项2</button-tab-item>
          </button-tab>
        </template>
      </vx-nav>
    </template>
    <vx-page-body  style="padding:0.2rem;">
      <button-tab v-model:active="active2">
        <button-tab-item name="tab1">选项1</button-tab-item>
        <button-tab-item name="tab2">选项2</button-tab-item>
        <button-tab-item name="tab3">选项3</button-tab-item>
        <button-tab-item name="tab4">选项4</button-tab-item>
      </button-tab>
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
