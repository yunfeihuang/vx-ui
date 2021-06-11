<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Divider"></vx-nav>
    </template>
    <vx-page-body  style="">
      <vx-group>
        <div style="padding:0 10px;line-height:0.9rem;">
          标题
          <divider></divider>
          内容....
          <br />
          <br />
          <divider title="标题">
            内容....
          </divider>
        </div>
      </vx-group>
      <vx-group title="九宫格">
        <div style="text-align:center;line-height:1.4rem;">
          <vx-flexbox>
            <vx-flexbox-item>项目</vx-flexbox-item>
            <divider vertical></divider>
            <vx-flexbox-item>项目</vx-flexbox-item>
            <divider vertical></divider>
            <vx-flexbox-item>项目</vx-flexbox-item>
          </vx-flexbox>
          <divider></divider>
          <vx-flexbox>
            <vx-flexbox-item>项目</vx-flexbox-item>
            <divider vertical></divider>
            <vx-flexbox-item>项目</vx-flexbox-item>
            <divider vertical></divider>
            <vx-flexbox-item>项目</vx-flexbox-item>
          </vx-flexbox>
        </div>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
}
</script>
