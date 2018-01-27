<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Password</div>
    </x-nav>
    <x-body slot="body">
      <div class="input-demo demos">
        <password placeholder="请输入密码" v-model="password" required/>
      </div>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
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
