# Calendar选择器

```
<template>
  <div>
    <group :title="`value:${value}`">
      <cell>
        <div slot="title">级联</div>
         <cascader slot="value" v-model="value" :options="options"/>
      </cell>
    </group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }]
      },
      {
        value: 'other',
        label: '其他',
        disabled: true
      }],
      value: []
    }
  }
}
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array  |     -     |    -    |
| placeholder     | 占位文字   | String  |     -     |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| options     | 选项   | Array  |   -       |        |
| separator     | 显示值的分割符号   | String  |   -       |    /    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发事件 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |