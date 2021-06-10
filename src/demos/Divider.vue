<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Divider"></vx-nav>
    </template>
    <vx-page-body  style="">
      <group>
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
      </group>
      <group title="九宫格">
        <div style="text-align:center;line-height:1.4rem;">
          <flexbox>
            <flexbox-item>项目</flexbox-item>
            <divider vertical></divider>
            <flexbox-item>项目</flexbox-item>
            <divider vertical></divider>
            <flexbox-item>项目</flexbox-item>
          </flexbox>
          <divider></divider>
          <flexbox>
            <flexbox-item>项目</flexbox-item>
            <divider vertical></divider>
            <flexbox-item>项目</flexbox-item>
            <divider vertical></divider>
            <flexbox-item>项目</flexbox-item>
          </flexbox>
        </div>
      </group>
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
}
</script>
