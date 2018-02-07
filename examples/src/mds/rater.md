# Rater评分

``` html
<template>
  <group>
    <cell :arrow="false">
      <div slot="title">评分({{value}})</div>
      <rater slot="value" v-model="value"/>
    </cell>
    <cell :arrow="false">
      <div slot="title">评分({{value}})</div>
      <rater slot="value" color="rgb(255, 204, 102)" v-model="value"/>
    </cell>
    <cell :arrow="false">
      <div slot="title">喜欢({{value}})</div>
      <rater slot="value" star="♡" v-model="value"/>
    </cell>
    <cell :arrow="false">
      <div slot="title">喜欢({{value}})</div>
      <rater slot="value" star="♡" color="rgb(255, 204, 102)" v-model="value"/>
    </cell>
    <cell :arrow="false">
      <div slot="title">滑块控制</div>
      <range style="width:200px" slot="value" v-model="value" :max="5"/>
    </cell>
  </group>
</template>
<script>
export default {
  data () {
    return {
      value: 0
    }
  }
}
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | number  |     -     |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| max     | 最大值   | number  |   -       |    5    |
| star     | 文字图标   | String  |   -       |    ★    |
| color     | 选中颜色   | String  |   -       |    -    |
| gutter     | 星号间距   |  String |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | - | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |