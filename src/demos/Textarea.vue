<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Textarea</div>
    </x-nav>
    <x-body slot="body">
      <div style="margin-top:20px;">
        <x-textarea v-model="value" placeholder="请输入消息内容" />
        <div style="padding:10px;color:#999">
        注：输入换行符或者更多内容我会自动”撑高“
        </div>
        <div style="padding:10px">{{value}}</div>
      </div>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      value: '亲，收到我的祝福么？'
    }
  }
}
</script>
