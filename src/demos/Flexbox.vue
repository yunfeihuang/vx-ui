<template>
  <page>
    <x-nav slot="header" title="Flexbox"></x-nav>
    <page-body slot="body" class="flexbox-demo">
      ### 平均跨度
      <flexbox :gutter="10">
        <flexbox-item>1</flexbox-item>
        <flexbox-item>2</flexbox-item>
        <flexbox-item>3</flexbox-item>
      </flexbox>
      <br />
      ### 跨度
      <flexbox :gutter="10">
        <flexbox-item>1</flexbox-item>
        <flexbox-item :flex="2">2</flexbox-item>
        <flexbox-item :flex="3">3</flexbox-item>
      </flexbox>
      <br />
      ### 列布局
      <flexbox direction="column" :gutter="0">
        <flexbox-item>1</flexbox-item>
        <flexbox-item style="margin:10px 0">2</flexbox-item>
        <flexbox-item>3</flexbox-item>
      </flexbox>
    </page-body>
  </page>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .flexbox-demo{
    padding:10px;
    overflow:hidden;
    background: #fff;
    .vx-flexbox--item{
      background:#eee;
      border-radius:6px;
      text-align:center;
      line-height:0.8rem;
    }
  }
</style>
