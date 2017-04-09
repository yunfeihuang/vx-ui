<template>
  <layout>
    <x-header slot="header">
      <div slot="title">XTextarea</div>
    </x-header>
    <x-body slot="body">
      <div class="input-demo demos">
        <div class="fieldset">
          <x-textarea placeholder="请输入消息内容" @on-change="changeHandler">{{content}}</x-textarea>
        </div>
      </div>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  XTextarea
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XTextarea
  },
  methods: {
    changeHandler (value) {
      this.content = value
    }
  },
  data () {
    return {
      content: '亲，收到我的祝福么？'
    }
  }
}
</script>

<style lang="scss">

</style>
