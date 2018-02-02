# Checker选择按钮

``` html
<template>
  <div>
    <group title="Checker 多选">
      <div style="padding:20px 10px">
        <checker-group v-model="checkboxValue">
          <checker
            v-for="item in options"
            :value="item.value"
            :disabled="item.disabled"
            :key="item.value"
            >
            {{item.label}}
          </checker>
        </checker-group>
        <br />
        value：{{checkboxValue}}
      </div>
    </group>
    <group title="Checker 最多选2个">
      <div style="padding:20px 10px">
        <checker-group :max="2" v-model="checkboxValue">
          <checker
            v-for="item in options"
            :value="item.value"
            :disabled="item.disabled"
            :key="item.value"
            >
            {{item.label}}
          </checker>
        </checker-group>
        <br />
        value：{{checkboxValue}}
      </div>
    </group>
    <group title="Checker 单选">
      <div style="padding:20px 10px">
        <checker-group :max="1" :options="options" v-model="radioValue">
          <checker
            v-for="item in options"
            :value="item.value"
            :disabled="item.disabled"
            :key="item.value"
            >
            {{item.label}}
          </checker>
        </checker-group>
        <br />
        value：{{radioValue}}
      </div>
    </group>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checkboxValue: ['1'],
      radioValue: [],
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
### CheckerGroup

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

### Checker

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