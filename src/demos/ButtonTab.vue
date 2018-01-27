<template>
  <layout>
    <x-nav slot="header">
      <div slot="title" style="text-align:center">
        <div class="header-tab-button">
          <button-tab class="tab-button" :active.sync="active" active-class="header-tab-active" >
            <button-tab-item name="tab1">选项1</button-tab-item>
            <button-tab-item name="tab2">选项2</button-tab-item>
          </button-tab>
        </div>
      </div>
    </x-nav>
    <x-body slot="body" style="padding:15px;background:#fff">
      <h4 style="text-align:center;font-size:16px;margin:0 0 15px 0">ButtonTab</h4>
      <button-tab :active.sync="active">
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
      active: 'tab1'
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
