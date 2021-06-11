<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Cell"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <vx-cell title="github" to="https://github.com/yunfeihuang/vx-ui" target="_blank" value="Start me">
          <template v-slot:icon><img :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%"></template>
        </vx-cell>
        <vx-cell title="github" arrow arrow-direction="down" value="Start me">
          <template v-slot:icon><img :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%"></template>
        </vx-cell>
      </vx-group>
      <vx-group title="type info">
        <vx-cell title="github" type="info" value="Start me"></vx-cell>
        <vx-cell title="github" type="info" value="Start me"></vx-cell>
        <vx-cell title="github" type="info" value="Start me"></vx-cell>
      </vx-group>
      <vx-group title="其他内容">
        <vx-cell title="标题">
          <template v-slot:value><vx-switch v-model="checked" /></template>
          <div>其他内容...</div>
        </vx-cell>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
