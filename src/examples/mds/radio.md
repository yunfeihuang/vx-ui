# Radio单选按钮

```
##:Radio:##
```
### RadioGroup

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | String, Number  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 值改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### Radio

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| modelValue     | 值   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| update:modelValue| 选中改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |