<template>
  <page>
    <x-nav slot="header" title="Password"></x-nav>
    <page-body slot="body">
      <group title="default">
        <password
          placeholder="请输入密码"
          v-model="value"
          :cipher.sync="cipher"
          :encrypt="encrypt"/>
      </group>
      <group title="初始明文">
        <password
          placeholder="请输入密码"
          v-model="value"
          native-type="text"
          :cipher.sync="cipher"
          :encrypt="encrypt"/>
      </group>
      密文(简单的转成大写)：{{cipher}}
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      cipher: ''
    }
  },
  methods: {
    encrypt (value, next) {
      next(value.toUpperCase())
    }
  }
}
</script>
