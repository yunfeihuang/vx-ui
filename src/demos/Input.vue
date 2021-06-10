<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Input"></vx-nav>
    </template>
    <vx-page-body>
      <group title="default">
        <x-input placeholder="请输入帐号" v-model="value"/>
      </group>
      <group title="size small">
        <x-input placeholder="请输入帐号" size="small" v-model="value"/>
      </group>
      <group title="slot prepend&append">
        <x-input placeholder="请输入帐号" v-model="value">
          <template v-slot:prepend>♡</template>
          <template v-slot:append>★</template>
        </x-input>
      </group>
      注意：password,datetime,datarange,select,cascader等都支持这两个slot
      <group title="disabled">
        <x-input placeholder="请输入帐号" v-model="value" disabled/>
      </group>
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
