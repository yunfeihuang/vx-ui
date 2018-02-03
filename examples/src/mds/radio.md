# Radio单选按钮

``` html
<template>
  <div>
    <group title="Radio" class="radio-wrapper">
      <radio name="radio1">篮球</radio>
      <divider></divider>
      <radio name="radio1">羽毛球</radio>
    </group>
    <group title="RadioGroup">
      <radio-group v-model="value">
        <radio 
          v-for="item in options"
          :disabled="item.disabled"
          :key="item.value"
          :value="item.value"
          >
            {{item.label}}
        </radio>
      </radio-group>
      <div style="padding:15px 10px;">
        value：{{value}}
      </div>
    </group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '1',
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
      ]
    }
  }
}
</script>
```
### RadioGroup

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | String  |   -       |    -    |
| disabled     | 是否禁用   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变触发 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### Radio

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