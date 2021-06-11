<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Input"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <vx-input placeholder="请输入帐号" v-model="value"/>
      </vx-group>
      <vx-group title="size small">
        <vx-input placeholder="请输入帐号" size="small" v-model="value"/>
      </vx-group>
      <vx-group title="slot prepend&append">
        <vx-input placeholder="请输入帐号" v-model="value">
          <template v-slot:prepend>♡</template>
          <template v-slot:append>★</template>
        </vx-input>
      </vx-group>
      注意：password,datetime,datarange,select,cascader等都支持这两个slot
      <vx-group title="disabled">
        <vx-input placeholder="请输入帐号" v-model="value" disabled/>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
