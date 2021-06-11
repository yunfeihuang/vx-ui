<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Actionsheet"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group>
        <vx-cell :arrow="false">
          <template v-slot:title>default</template>
          <template v-slot:value><vx-switch v-model="open1"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>cancel item && title</template>
          <template><vx-switch v-model="open2"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>menu</template>
          <template v-slot:value><vx-switch v-model="open3"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>js调用</template>
          <template v-slot:value><span @click="handleJSCall">点击我</span></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
    <actionsheet v-model:open="open1" @action="handleAction">
      <actionsheet-item
        v-for="item in options"
        :value="item.value"
        :key="item.value"
        :disabled="item.disabled">
        {{item.label}}
      </actionsheet-item>
    </actionsheet>
    <actionsheet v-model:open="open2" cancel @action="handleAction" title="标题文字">
      <actionsheet-item
        v-for="item in options"
        :value="item.value"
        :key="item.value"
        :disabled="item.disabled">
        {{item.label}}
      </actionsheet-item>
    </actionsheet>
    <actionsheet type="menu" v-model:open="open3" @action="handleAction" >
      <actionsheet-item
        v-for="item in options"
        :value="item.value"
        :key="item.value"
        :disabled="item.disabled">
          {{item.label}}
      </actionsheet-item>
    </actionsheet>
  </vx-page>
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
