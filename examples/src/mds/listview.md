# ListView列表

```html
<template>
  <div>
    <list-view @pullup="handlePullup" @pulldown="handlePulldown" :loading="loading" :end="end">
      <div v-for="(item,index) in list" :key="index">
        <flexbox align="center" class="list-view-item">
          <x-img class="avator" :src="item.src" />
          <flexbox-item>
            <h4>{{item.name}}</h4>
            <div>{{item.date}}</div>
          </flexbox-item>
        </flexbox>
        <divider></divider>
      </div>
    </list-view>
  </div>
</template>
<script>
export default {
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
    handlePullup (e) {
      this.loading = true
      setTimeout(() => { // 模拟ajax请求
        this.list = this.list.concat(this.getList())
        this.loading = false
        if (this.list.length >= 60) {
          this.end = true // 没有更多了
        }
      }, 1000)
    },
    handlePulldown (e) {
      this.loading = true
      setTimeout(() => { // 模拟ajax请求
        this.list = this.getList().concat(this.list)
        this.loading = false
      }, 1000)
    }
  },
  data () {
    let list = this.getList()
    return {
      list,
      loading: false,
      end: false // 是否还没有更多
    }
  }
}
</script>
<style lang="scss">
  .list-view-demos .v-list-view{
    height:100%;
    background:#fff;
    position: absolute;
    width: 100%;
  }
  .list-view-demos{
    .avator{
      width:50px;
      height:50px;
      margin-right:6px;
      border-radius:3px;
    }
    .list-view-item{
      padding:6px
    }
    h4{
      margin:0;
      overflow: hidden;
    }
  }
</style>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| loading     | 数据加载状态   | Boolean  |   -       |    false    |
| end     | 是否有更多   | Boolean  |   -       |    false    |
| loadingText     | 加载中的提示文字   | String  |   -       |    数据加载...    |
| pullDownText     | 下拉刷新的提示文字   | String  |   -       |    下拉刷新    |
| refreshText     | 释放刷新的提示文字   | String  |   -       |    释放刷新    |
| endText     | 没有更多的提示文字   | String  |   -       |    没有更多    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| pulldown | 下拉刷新事件(注册事件之后才会有下拉效果) | - |
| pullup | 上拉加载更多事件(注册事件之后才会有上拉效果) | - |
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |