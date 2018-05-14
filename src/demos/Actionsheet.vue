<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Actionsheet</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">default</div>
          <x-switch slot="value" v-model="open1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">cancel item</div>
          <x-switch slot="value" v-model="open2"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">menu</div>
          <x-switch slot="value" v-model="open3"/>
        </cell>
      </group>
    </x-body>
    <actionsheet :open.sync="open1" @click="handleClick">
      <actionsheet-item v-for="item in options" :value="item.value" :key="item.value">{{item.label}}</actionsheet-item>
    </actionsheet>
    <actionsheet :open.sync="open2" :cancel="true" @click="handleClick" >
      <actionsheet-item v-for="item in options" :value="item.value" :key="item.value">{{item.label}}</actionsheet-item>
    </actionsheet>
    <actionsheet type="menu" :open.sync="open3" @click="handleClick" >
      <actionsheet-item v-for="item in options" :value="item.value" :key="item.value">{{item.label}}</actionsheet-item>
    </actionsheet>
  </layout>
</template>

<script>

export default {
  methods: {
    handleClick (value) {
      let label = this.options.filter((item) => {
        return item.value === value
      })[0].label
      this.$toast({content: `您点击了“${label}”`})
    }
  },
  data () {
    return {
      options: [
        {
          value: '1',
          label: '编辑'
        },
        {
          value: '2',
          label: '收藏'
        },
        {
          value: '3',
          label: '分享'
        },
        {
          value: '4',
          label: '删除'
        }
      ],
      open1: false,
      open2: false,
      open3: false
    }
  }
}
</script>
