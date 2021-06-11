<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Flexbox"></vx-nav>
    </template>
    <vx-page-body  class="flexbox-demo">
      ### 平均跨度
      <vx-flexbox :gutter="10">
        <vx-flexbox-item>1</vx-flexbox-item>
        <vx-flexbox-item>2</vx-flexbox-item>
        <vx-flexbox-item>3</vx-flexbox-item>
      </vx-flexbox>
      <br />
      ### 跨度
      <vx-flexbox :gutter="10">
        <vx-flexbox-item>1</vx-flexbox-item>
        <vx-flexbox-item :flex="2">2</vx-flexbox-item>
        <vx-flexbox-item :flex="3">3</vx-flexbox-item>
      </vx-flexbox>
      <br />
      ### 列布局
      <vx-flexbox direction="column" :gutter="0">
        <vx-flexbox-item>1</vx-flexbox-item>
        <vx-flexbox-item style="margin:10px 0">2</vx-flexbox-item>
        <vx-flexbox-item>3</vx-flexbox-item>
      </vx-flexbox>
    </vx-page-body>
  </vx-page>
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
