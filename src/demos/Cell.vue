<template>
  <page>
    <x-nav slot="header" back="/" title="Cell"></x-nav>
    <x-body slot="body">
      <group title="default">
        <cell title="github" to="https://github.com/yunfeihuang/vx-ui" target="_blank">
          <img slot="icon" :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%">
          <span slot="value">Start me</span>
        </cell>
        <cell title="github" arrow arrow-direction="down">
          <img slot="icon" :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%">
          <span slot="value">Start me</span>
        </cell>
      </group>
      <group title="no arrow">
        <cell :arrow="false" title="标题">
          <x-switch slot="value" v-model="checked" />
          <div>其他内容...</div>
        </cell>
      </group>
    </x-body>
  </page>
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
