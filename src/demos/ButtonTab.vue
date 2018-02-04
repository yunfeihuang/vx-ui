<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title" style="text-align:center">
        <div class="header-tab-button">
          <button-tab class="tab-button" :active.sync="active1" active-class="header-tab-active" >
            <button-tab-item name="tab1">选项1</button-tab-item>
            <button-tab-item name="tab2">选项2</button-tab-item>
          </button-tab>
        </div>
      </div>
    </x-nav>
    <x-body slot="body" style="padding:15px;background:#fff">
      <button-tab :active.sync="active2">
        <button-tab-item name="tab1">选项1</button-tab-item>
        <button-tab-item name="tab2">选项2</button-tab-item>
        <button-tab-item name="tab3">选项3</button-tab-item>
        <button-tab-item name="tab4">选项4</button-tab-item>
      </button-tab>
    </x-body>
  </layout>
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
  .header-tab-button{
    width:140px;
    font-size:14px;
    margin: auto;
    .tab-button{
      line-height:30px;
    }
    .header-tab-active{
      background:#fff;
      color:#555;
    }
  }
</style>
