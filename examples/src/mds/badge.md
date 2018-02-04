# Badge消息提示

```html
<template>
   <group>
    <cell>
      <div slot="title">红点</div>
      <div slot="value">新消息<badge class="badge"/></div>
    </cell>
    <cell @click.native="handleClick">
      <div slot="title">个位数红点(点击累加)</div>
      <div slot="value">新消息<badge class="badge" :text="count"/></div>
    </cell>
    <cell>
      <div slot="title">超出最大值显示(ellipsis)红点</div>
      <div slot="value">新消息<badge class="badge" :text="Number(20)"/></div>
    </cell>
    <cell>
      <div slot="title">多位数红点</div>
      <div slot="value">新消息<badge class="badge" text="888"/></div>
    </cell>
  </group>
</template>
<script>
  export default {
    methods: {
      handleClick () {
        this.count++
      }
    },
    data () {
      return {
        count: 8
      }
    }
  }
</script>

<style lang="css">
  .badge{
    margin-left:5px;
    margin-right:2px;
  }
</style>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| text     | 显示数字   | String,Number  |   -       |    -    |
| max     | 最大显示数字   | Number  |   -       |    9    |
| ellipsis     | 大于最大显示数字显示文字   | String  |   -       |    •••    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |