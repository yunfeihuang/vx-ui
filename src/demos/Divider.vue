<template>
  <layout>
    <x-nav slot="header" back="/" title="Divider"></x-nav>
    <x-body slot="body" style="">
      <group>
        <div style="padding:0 10px;line-height:0.9rem;">
          标题
          <divider></divider>
          内容....
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
    </x-body>
  </layout>
</template>
<script>
export default {
}
</script>
