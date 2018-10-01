# Swipeout操作

```
<template>
  <div>
    <swipeout v-for="(item,index) in list" :key="index" :open="index===1" @close="handleCloseSwipeout" @open="handleOpenSwipeout">
      <flexbox align="center" style="padding:6px">
        <x-img style="width:40px;height:40px;margin-right:6px;border-radius:3px;" :src="item.src" />
        <flexbox-item>
          <h4 style="margin:0;overflow: hidden;">{{item.name}}(按我向左滑动)</h4>
          <div>{{item.date}}</div>
        </flexbox-item>
      </flexbox>
      <button @click="handleAction" style="background:#1AAD19;color:#fff;" slot="action" type="button">顶置</button>
      <button @click="handleAction" style="background:#ffe26d;color:#fff;" slot="action" type="button">收藏</button>
      <button @click="handleAction" style="background:#ff5500;color:#fff;" slot="action" type="button">删除</button>
    </swipeout>
  </div>
</template>

<script>
export default {
  data () {
    let list = this.getList()
    return {
      list,
      loading: false,
      end: false // 是否还没有更多
    }
  },
  methods: {
    getList () {
      let result = []
      for (let i = 0; i < 30; i++) {
        result.push({
          src: './static/images/github.png',
          name: `item-${Date.now()}`,
          date: new Date().toLocaleString()
        })
      }
      return result
    },
    handleCloseSwipeout () {
      console.log('handleCloseSwipeout')
    },
    handleOpenSwipeout () {
      console.log('handleOpenSwipeout')
    },
    handleAction (e) {
      this.$toast({message: '点击了' + e.target.innerHTML})
    }
  }
}
</script>
  
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| open     | 是否打开操作项   | Boolean  |   -       |    false    |
| divider     | 是否底分割线   | Boolean  |   -       |    false    |
| open     | -   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| open | 打开事件 | - |
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |
| action | 操作项 |