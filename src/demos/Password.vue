<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Password"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <vx-password
          placeholder="请输入密码"
          v-model="value"
          v-model:cipher="cipher"
          :encrypt="encrypt"/>
      </vx-group>
      <vx-group title="初始明文">
        <vx-password
          placeholder="请输入密码"
          v-model="value"
          native-type="text"
          v-model:cipher="cipher"
          :encrypt="encrypt"/>
      </vx-group>
      密文(简单的转成大写)：{{cipher}}
    </vx-page-body>
  </vx-page>
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
