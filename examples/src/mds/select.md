# Select下拉框

```
##:Select:##
```
### Select

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array[String]  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| max     | 最大选中数,0为不限制，1为单选   | Number  |   -       |    0    |
| arrow     | 是否显示箭头图标   | Boolean  |   -       |    true    |
| arrowProps     | 箭头图标props,参考Arrow组件   | Object  |   -       |    -    |
| popupProps     | 弹框面板的props,参考Popup组件   | Object  |   -       |    -    |


#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### Option

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| exclusive     | 是否排他选项   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 选中改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |
| prepend | select前面插入内容 |
| append | select后面插入内容 |