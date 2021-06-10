<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Password"></vx-nav>
    </template>
    <vx-page-body>
      <group title="default">
        <password
          placeholder="请输入密码"
          v-model="value"
          v-model:cipher="cipher"
          :encrypt="encrypt"/>
      </group>
      <group title="初始明文">
        <password
          placeholder="请输入密码"
          v-model="value"
          native-type="text"
          v-model:cipher="cipher"
          :encrypt="encrypt"/>
      </group>
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
