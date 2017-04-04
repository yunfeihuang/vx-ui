<template>
  <div class="input-demo demos">
    <h1>XTextarea</h1>
    <div class="fieldset">
      <x-textarea placeholder="请输入消息内容" @on-change="changeHandler">{{content}}</x-textarea>
    </div>
  </div>
</template>

<script>
import {
  XTextarea
} from '../components'
export default {
  components: {
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
