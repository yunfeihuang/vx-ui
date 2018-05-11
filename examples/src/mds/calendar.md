# Picker选择器

```html
<template>
  <div>
    <message>注意：此示例要在移动设备体验哦~</message>
    <group>
      <picker placeholder="请选择" v-model="value" :options="options"></picker>
    </group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [{
        value: '010101',
        label: '南山区'
      },
      {
        value: '010102',
        label: '福田区'
      },
      {
        value: '010103',
        label: '罗湖区'
      },
      {
        value: '010104',
        label: '宝安区'
      },
      {
        value: '010105',
        label: '龙华区'
      },
      {
        value: '010106',
        label: '龙岗区'
      },
      {
        value: '010107',
        label: '盐田区'
      },
      {
        value: '010108',
        label: '坪山区'
      },
      {
        value: '010109',
        label: '光明区'
      }],
      value: '010101'
    }
  }
}
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | String  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    请选择    |
| options     | 选项列表   | Array[{value,label}]  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发事件 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |