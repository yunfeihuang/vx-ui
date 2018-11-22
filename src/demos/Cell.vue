<template>
  <layout>
    <x-nav slot="header" back="/" title="Cell"></x-nav>
    <x-body slot="body">
      <group title="default">
        <a href="https://github.com/yunfeihuang/vx-ui" style="color:inherit">
          <cell title="github" >
            <img slot="icon" :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%">
            <span slot="value">Start me</span>
          </cell>
        </a>
      </group>
      <group title="no arrow">
        <cell :arrow="false" title="标题">
          <x-switch slot="value" v-model="checked" />
        </cell>
      </group>
    </x-body>
  </layout>
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
