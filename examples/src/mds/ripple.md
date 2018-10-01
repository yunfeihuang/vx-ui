# Ripple波纹

```
<template>
  <div>
    <group>
      <ripple style="padding:0.3rem 0.2rem">
        点击我会出现波纹
      </ripple>
      <divider></divider>
      <ripple style="padding:0.3rem 0.2rem">
        点击我会出现波纹
      </ripple>
      <divider></divider>
      <ripple color="rgba(255,0,0,0.1)" style="padding:0.3rem 0.2rem">
        自定义颜色(prop color:rgba(255,0,0,0.1))
      </ripple>
    </group>
    <group title="position:center">
      <tabbar :ripple="true" :active.sync="active">
        <tabbar-item :name="0">
          <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
          <small>主页</small>
        </tabbar-item>
        <tabbar-item :name="1">
          <i style="font-size:0.5rem;margin: -0.1rem;">♡</i>
          <small>消息</small>
        </tabbar-item>
        <tabbar-item :name="3">
          <i style="font-size:0.5rem;margin: -0.1rem;">★</i>
          <small>我的</small>
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