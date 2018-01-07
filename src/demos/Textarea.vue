<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">XTextarea</div>
    </x-nav>
    <x-body slot="body">
      <div class="input-demo demos">
        <div class="fieldset">
          <x-textarea v-model="content" placeholder="请输入消息内容" />
          <div style="padding:10px;color:#999">
          注：输入换行符或者更多内容我会自动”撑高“
          </div>
          <div style="padding:10px">{{content}}</div>
        </div>
      </div>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  XTextarea
} from 'components'
export default {
  components: {
    Layout,
    XNav,
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
  .input-demo {
    padding-top: 20px;
  }
</style>
