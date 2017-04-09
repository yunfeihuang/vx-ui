<template>
  <layout>
    <x-header slot="header">
      <div slot="title">XInput,Password</div>
    </x-header>
    <x-body slot="body">
      <div class="input-demo demos">
        <div class="fieldset">
          <x-input placeholder="请输入帐号" :value="account" @on-change="accountChangeHandler" />
          <password placeholder="请输入密码" :value="password" @on-change="passwordChangeHandler" />
        </div>
        <div style="padding:0px 15px">
          <x-button class="btn-login" type="primary">立即登录</x-button>
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
  XButton,
  XInput,
  Password
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XButton,
    XInput,
    Password
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
    padding-top:20px;
    .btn-login{
      margin-top:20px;
    }
  }
</style>
