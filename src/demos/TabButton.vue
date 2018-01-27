<template>
  <layout>
    <x-nav slot="header">
      <div slot="title" style="text-align:center">
        <div class="header-tab-button">
          <button-tab class="tab-button" :active="active2" active-class="header-tab-active" @on-change="handleChange2">
            <button-tab-item>选项1</button-tab-item>
            <button-tab-item>选项2</button-tab-item>
          </button-tab>
        </div>
      </div>
    </x-nav>
    <x-body slot="body" style="padding:15px;background:#fff">
      <h4 style="text-align:center;font-size:16px;margin:0 0 15px 0">ButtonTab</h4>
      <button-tab :active="active" @on-change="handleChange">
        <button-tab-item>选项1</button-tab-item>
        <button-tab-item>选项2</button-tab-item>
        <button-tab-item>选项3</button-tab-item>
        <button-tab-item>选项4</button-tab-item>
      </button-tab>
    </x-body>
  </layout>
</template>

<script>
export default {
  methods: {
    handleChange (value) {
      this.active = value
    },
    handleChange2 (value) {
      this.active2 = value
    }
  },
  data () {
    return {
      active: 0,
      active2: 0
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
