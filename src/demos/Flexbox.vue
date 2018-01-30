<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Flexbox</div>
    </x-nav>
    <x-body slot="body" class="flexbox-demos">
      <flexbox :gutter="10">
        <flexbox-item>
          <div class="flexbox-item">1</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flexbox-item">2</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flexbox-item">3</div>
        </flexbox-item>
      </flexbox>

      ### 跨度
      <flexbox :gutter="10">
        <flexbox-item>
          <div class="flexbox-item">1</div>
        </flexbox-item>
        <flexbox-item :flex="2">
          <div class="flexbox-item">2</div>
        </flexbox-item>
        <flexbox-item :flex="3">
          <div class="flexbox-item">3</div>
        </flexbox-item>
      </flexbox>

      ### 列布局
      <flexbox direction="column">
        <flexbox-item>
          <div class="flexbox-item">1</div>
        </flexbox-item>
        <flexbox-item style="margin:10px 0">
          <div class="flexbox-item">2</div>
        </flexbox-item>
        <flexbox-item>
          <div class="flexbox-item">2</div>
        </flexbox-item>
      </flexbox>

      ### 项目换行
      <flexbox :gutter="10" wrap="wrap" class="flex-wrap">
        <flexbox-item width="25%">
          <div class="flexbox-item">1</div>
        </flexbox-item>
        <flexbox-item width="25%">
          <div class="flexbox-item">2</div>
        </flexbox-item>
        <flexbox-item width="25%">
          <div class="flexbox-item">3</div>
        </flexbox-item>
        <flexbox-item width="25%">
          <div class="flexbox-item">4</div>
        </flexbox-item>
        <flexbox-item width="25%">
          <div class="flexbox-item">5</div>
        </flexbox-item>
        <flexbox-item width="25%">
          <div class="flexbox-item">6</div>
        </flexbox-item>
      </flexbox>
    </x-body>
  </layout>
</template>

<script>

export default {}
</script>

<style lang="scss">
  .flexbox-demos{
    padding:10px;
    overflow:hidden;
    .flexbox-item{
      background:#3399ff;
      border-radius:6px;
      text-align:center;
      color:#fff;
      line-height:30px;
    }
    .flex-wrap .flexbox-item{
      margin:5px 0;
    }
  }
</style>
