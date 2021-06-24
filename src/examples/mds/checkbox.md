# Checkbox复选按钮

```
##:Checkbox:##
```
### CheckboxGroup

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | String,Number  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| max     | 最大选中数,0为不限制，1为单选   | Number  |   -       |    0    |
| iconStyle     | 选中图标的风格   | String  |   checkbox       |    -    |
| iconPosition     | 图标的位置   | Boolean  |   left,right       |    left    |
| inline     | 行内样式   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 值改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### Checkbox

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | String,Number  |   -       |    -    |
| onValue     | 值   | String  |   -       |    -    |
| offValue     | 值   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| inline     | 行内样式   | Boolean  |   -       |    false    |
| iconStyle     | 选中图标的风格   | String  |   checkbox       |    -    |
| iconPosition     | 图标的位置   | Boolean  |   left,right       |    left    |
| exclusive     | 是否排他选项   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 选中改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |