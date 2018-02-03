# Checkbox复选按钮

``` html
<template>
  <div>
    <group title="Checkbox">
      <checkbox :checked.sync="checked">{{checked}}</checkbox>
    </group>
    <group title="CheckboxGroup">
      <checkbox-group v-model="value">
        <checkbox
           v-for="item in options"
          :disabled="item.disabled"
          :value="item.value"
          :key="item.value"
          >
          {{item.label}}
        </checkbox>
      </checkbox-group>
      <div style="padding:15px 10px;">
        value：{{value}}
      </div>
    </group>
    <group title="CheckboxGroup-Reverse">
      <checkbox-group direction="reverse" v-model="reverseValue">
        <checkbox
           v-for="item in options"
          :disabled="item.disabled"
          :value="item.value"
          :key="item.value"
          >
          {{item.label}}
        </checkbox>
      </checkbox-group>
      <div style="padding:15px 10px;">
      value：{{reverseValue}}
      </div>
    </group>
    <group title="CheckboxGroup最多选2个">
      <checkbox-group direction="reverse" :max="2" v-model="reverseValue">
        <checkbox
           v-for="item in options"
          :disabled="item.disabled"
          :value="item.value"
          :key="item.value"
          >
          {{item.label}}
        </checkbox>
      </checkbox-group>
      <div style="padding:15px 10px;">
      value：{{reverseValue}}
      </div>
    </group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: false,
      value: ['1'],
      options: [
        {
          value: '1',
          label: '篮球'
        },
        {
          value: '2',
          label: '羽毛球'
        },
        {
          value: '3',
          label: '乒乓球',
          disabled: true
        },
        {
          value: '4',
          label: '高尔夫'
        }
      ],
      reverseValue: ['1']
    }
  }
}
</script>
```
### CheckboxGroup

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array[String]  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |
| max     | 最大选中数,0为不限制，1为单选   | Number  |   -       |    0    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### Checkbox

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 选中改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |