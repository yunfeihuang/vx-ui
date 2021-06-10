<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Cell"></vx-nav>
    </template>
    <vx-page-body>
      <group title="default">
        <cell title="github" to="https://github.com/yunfeihuang/vx-ui" target="_blank" value="Start me">
          <template v-slot:icon><img :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%"></template>
        </cell>
        <cell title="github" arrow arrow-direction="down" value="Start me">
          <template v-slot:icon><img :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%"></template>
        </cell>
      </group>
      <group title="type info">
        <cell title="github" type="info" value="Start me"></cell>
        <cell title="github" type="info" value="Start me"></cell>
        <cell title="github" type="info" value="Start me"></cell>
      </group>
      <group title="其他内容">
        <cell title="标题">
          <template v-slot:value><vx-switch v-model="checked" /></template>
          <div>其他内容...</div>
        </cell>
      </group>
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
