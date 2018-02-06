# Ripple波纹

```html
<template>
  <div>
    <group class="ripple-demo">
      <ripple>
        点击我会出现波纹
      </ripple>
      <divider></divider>
      <ripple>
        点击我会出现波纹
      </ripple>
      <divider></divider>
      <ripple color="rgba(255,0,0,0.1)">
        自定义颜色(prop color:rgba(255,0,0,0.1))
      </ripple>
    </group>
    <group title="position:center">
      <tabbar :ripple="true" :active.sync="active">
        <tabbar-item :name="0">
          <icon>&#xe651;</icon>
          <span>主页</span>
        </tabbar-item>
        <tabbar-item :name="1">
          <icon>&#xe653;</icon>
          <span>消息</span>
        </tabbar-item>
        <tabbar-item :name="3">
          <icon>&#xe63b;</icon>
          <span>我的</span>
        </tabbar-item>
      </tabbar>
    </group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        active: 0
      }
    }
  }
</script>

<style lang="css">
  .ripple-demo{
    line-height:44px;
    text-indent:10px;
  }
</style>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| color     | 波纹颜色   | -  |   -       |    -    |
| position     | 波纹位置   | -  |   center       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |