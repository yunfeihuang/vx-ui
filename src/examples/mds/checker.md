# Checker选择按钮

```
##:Checker:##
```
### CheckerGroup

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | Array[String, Number]  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| icon     | 是否显示勾选icon   | Boolean  |   -       |    false    |
| block     | 是否块布局模式   | Boolean  |   -       |    false    |
| fake     | 是否伪选择项，用于“更多场景”   | Boolean  |   -       |    -    |
| max     | 最大选中数,0为不限制，1为单选   | Number  |   -       |    0    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 值改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### Checker

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | String, Number  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| icon     | 是否显示勾选icon   | Boolean  |   -       |    false    |
| block     | 是否块布局模式   | Boolean  |   -       |    false    |
| exclusive     | 是否排他选项   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 选中改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |