<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">XInput,Password</div>
    </x-nav>
    <x-body slot="body">
      <div class="input-demo demos">
        <x-form class="fieldset">
          <form-item align="left" validity-label="帐号">
            <x-input placeholder="请输入帐号" v-model="account" required/>
          </form-item>
          <form-item align="left" validity-label="密码">
            <password placeholder="请输入密码" v-model="password" required/>
          </form-item>
          <div style="padding:0px 15px">
            <x-button class="btn-login" type="primary" htmlType="submit">立即登录</x-button>
          </div>
        </x-form>
      </div>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  XForm,
  FormItem,
  XButton,
  XInput,
  Password
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    XForm,
    FormItem,
    XButton,
    XInput,
    Password
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
