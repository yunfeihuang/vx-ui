# Select下拉框

``` html
<template>
  <group>
    <cell>
      <div slot="title">下拉框({{label}})</div>
      <x-select 
        slot="value"
        :label.sync="label"
        v-model="value"
        placeholder="请选择">
        <x-option
          v-for="item in options"
          :value="item.value"
          :disabled="item.disabled"
          :key="item.value">
          {{item.label}}
        </x-option>
      </x-select>
    </cell>
    <cell>
      <div slot="title">下拉框(多选)</div>
      <x-select 
        slot="value"
        v-model="value2"
        :max="0"
        placeholder="请选择">
        <x-option
          v-for="item in options"
          :value="item.value"
          :disabled="item.disabled"
          :key="item.value">
          {{item.label}}
        </x-option>
      </x-select>
    </cell>
    <cell>
      <div slot="title">下拉框(最多选2个)</div>
      <x-select 
        slot="value"
        v-model="value3"
        :required="true"
        :max="2"
        placeholder="请选择">
        <x-option
          v-for="item in options"
          :value="item.value"
          :disabled="item.disabled"
          :key="item.value">
          {{item.label}}
        </x-option>
      </x-select>
    </cell>
    <cell>
      <div slot="title">下拉框(选项很多)</div>
      <x-select 
        slot="value"
        v-model="value4"
        placeholder="请选择">
        <x-option
          v-for="item in options"
          :value="item.value"
          :disabled="item.disabled"
          :key="item.value">
          {{item.label}}
        </x-option>
      </x-select>
    </cell>
  </group>
</template>
<script>
export default {
  data () {
    return {
      label: '',
      value: '',
      value2: [],
      value3: [],
      value4: '1',
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
          label: '乒乓球'
        },
        {
          value: '4',
          label: '高尔夫',
          disabled: true
        },
        {
          value: '5',
          label: '篮球'
        },
        {
          value: '6',
          label: '羽毛球'
        },
        {
          value: '7',
          label: '乒乓球'
        },
        {
          value: '8',
          label: '篮球'
        },
        {
          value: '9',
          label: '羽毛球'
        },
        {
          value: '10',
          label: '乒乓球'
        },
        {
          value: '11',
          label: '高尔夫'
        }
      ]
    }
  }
}
</script>
```
### Select

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| value     | 值   | Array[String]  |   -       |    -    |
| placeholder     | 占位文本   | String  |   -       |    -    |
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

### Option

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