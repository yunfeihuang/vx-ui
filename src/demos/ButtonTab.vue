<template>
  <page type="primary">
    <x-nav slot="header" back="/">
      <div slot="title" style="text-align:center">
        <button-tab class="tab-button" :active.sync="active1" size="small" style="width:2.8rem;margin:auto">
          <button-tab-item name="tab1">选项1</button-tab-item>
          <button-tab-item name="tab2">选项2</button-tab-item>
        </button-tab>
      </div>
    </x-nav>
    <x-body slot="body" style="padding:0.2rem;">
      <button-tab :active.sync="active2">
        <button-tab-item name="tab1">选项1</button-tab-item>
        <button-tab-item name="tab2">选项2</button-tab-item>
        <button-tab-item name="tab3">选项3</button-tab-item>
        <button-tab-item name="tab4">选项4</button-tab-item>
      </button-tab>
    </x-body>
  </page>
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
