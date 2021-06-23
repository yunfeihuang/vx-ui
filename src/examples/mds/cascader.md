# Cascader选择器

```
##:Cascader:##
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array  |     -     |    -    |
| placeholder     | 占位文字   | String  |     -     |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| options     | 选项   | Array  |   -       |        |
| separator     | 显示值的分割符号   | String  |   -       |    /    |
| arrow     | 是否显示箭头图标   | Boolean  |   -       |    true    |
| arrowProps     | 箭头图标props,参考Arrow组件   | Object  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发事件 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| prepend | 输入框前面插入内容 |
| append | 输入框后面插入内容 |