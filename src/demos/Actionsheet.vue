<template>
  <page>
    <x-nav slot="header" title="Actionsheet"></x-nav>
    <page-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">default</div>
          <x-switch slot="value" v-model="open1"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">cancel item && title</div>
          <x-switch slot="value" v-model="open2"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">menu</div>
          <x-switch slot="value" v-model="open3"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">js调用</div>
          <span slot="value" @click="handleJSCall">点击我</span>
        </cell>
      </group>
    </page-body>
    <actionsheet :open.sync="open1" @action="handleAction">
      <actionsheet-item
        v-for="item in options"
        :value="item.value"
        :key="item.value"
        :disabled="item.disabled">
        {{item.label}}
      </actionsheet-item>
    </actionsheet>
    <actionsheet :open.sync="open2" cancel @action="handleAction" title="标题文字">
      <actionsheet-item
        v-for="item in options"
        :value="item.value"
        :key="item.value"
        :disabled="item.disabled">
        {{item.label}}
      </actionsheet-item>
    </actionsheet>
    <actionsheet type="menu" :open.sync="open3" @action="handleAction" >
      <actionsheet-item
        v-for="item in options"
        :value="item.value"
        :key="item.value"
        :disabled="item.disabled">
          {{item.label}}
      </actionsheet-item>
    </actionsheet>
  </page>
</template>

<script>
export default {
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
          label: '删除',
          disabled: true
        }
      ],
      open1: false,
      open2: false,
      open3: false
    }
  },
  methods: {
    handleAction (value) {
      let label = this.options.filter((item) => {
        return item.value === value
      })[0].label
      this.$toast({message: `您点击了“${label}”`})
    },
    handleJSCall () {
      let self = this
      this.$actionsheet({
        title: '标题文字',
        options: [...this.options]
      }).then((value) => {
        self.handleAction(value)
      }).catch(() => {
        console.log('close')
      })
    }
  }
}
</script>
