<template>
  <div class="input-demo demos">
    <h1>XInput</h1>
    <div class="fieldset">
      <x-input placeholder="请输入帐号" :value="account" @on-change="accountChangeHandler" />
      <x-input placeholder="请输入密码" :value="password" htmlType="password" @on-change="passwordChangeHandler" />
    </div>
    <div style="padding:0px 15px">
      <x-button type="primary">立即登录</x-button>
    </div>
  </div>
</template>

<script>
import {
  XButton,
  XInput
} from '../components'
export default {
  components: {
    XButton,
    XInput
  },
  methods: {
    accountChangeHandler (value) {
      this.account = value
    },
    passwordChangeHandler (value) {
      this.password = value
    }
  },
  data () {
    return {
      account: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">
  .input-demo{
    button{
      margin-top:20px;
    }
  }
</style>
