# PopupPicker选择器

```html
<template>
  <div>
    <message>注意：此示例要在移动设备体验哦~</message>
    <group>
      <cell :arrow="false">
        <div slot="title">地区 picker</div>
        <x-switch slot="value" v-model="pickerOpen"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">地址级联 picker</div>
        <x-switch slot="value" v-model="pickerAddressOpen"/>
      </cell>
    </group>
    <popup-picker
      :open.sync="pickerOpen"
      :pickers="pickers"
      @change="handleConfirm"
      />
    <popup-picker 
      :open.sync="pickerAddressOpen"
      :pickers="addressPickers"
      @pickerchange="handleChangeAddressPicker"
      @change="handleConfirmAddress"
      />
  </div>
</template>
<script>
  let citys = {
  '01': [
    {
      value: '0101',
      label: '深圳市'
    },
    {
      value: '0102',
      label: '广州市'
    }
  ],
  '02': [
    {
      value: '0201',
      label: '南宁市'
    },
    {
      value: '0202',
      label: '柳州市'
    }
  ]
}
let areas = {
  '0101': [
    {
      value: '010101',
      label: '南山区'
    },
    {
      value: '010102',
      label: '福田区'
    },
    {
      value: '010103',
      label: '罗湖区'
    },
    {
      value: '010104',
      label: '宝安区'
    },
    {
      value: '010105',
      label: '龙华区'
    },
    {
      value: '010106',
      label: '龙岗区'
    },
    {
      value: '010107',
      label: '盐田区'
    },
    {
      value: '010108',
      label: '坪山区'
    },
    {
      value: '010109',
      label: '光明区'
    }
  ],
  '0102': [
    {
      value: '010201',
      label: '荔湾区'
    },
    {
      value: '010202',
      label: '天河区'
    },
    {
      value: '010203',
      label: '海珠区'
    },
    {
      value: '010204',
      label: '番禺区'
    },
    {
      value: '010205',
      label: '黄埔区'
    },
    {
      value: '010206',
      label: '白云区'
    },
    {
      value: '010207',
      label: '南沙区'
    },
    {
      value: '010208',
      label: '花都区'
    },
    {
      value: '010209',
      label: '增城区'
    },
    {
      value: '010210',
      label: '从化区'
    }
  ],
  '0201': [
    {
      value: '020101',
      label: '兴宁区'
    },
    {
      value: '020102',
      label: '江南区'
    },
    {
      value: '020103',
      label: '青秀区'
    },
    {
      value: '020104',
      label: '良庆区'
    },
    {
      value: '020105',
      label: '邕宁区'
    }
  ],
  '0202': [
    {
      value: '020201',
      label: '柳北区'
    },
    {
      value: '020202',
      label: '柳南区'
    },
    {
      value: '020203',
      label: '城中区'
    },
    {
      value: '020204',
      label: '柳江区'
    }
  ]
}

export default {
  methods: {
    handleConfirm (value) {
      let val = value.map(item => item.value)
      window.$toast({content: '你选中了值：' + val})
    },
    handleChangeAddressPicker (value, index) {
      if (index === 0) {
        this.addressPickers[1].options = citys[value]
        this.addressPickers[1].value = citys[value][0].value
        this.addressPickers[2].options = areas[this.addressPickers[1].value]
        this.addressPickers[2].value = areas[this.addressPickers[1].value][0].value
      }
      if (index === 1) {
        this.addressPickers[2].options = areas[value]
        this.addressPickers[2].value = areas[value][0].value
      }
    },
    handleConfirmAddress (value) {
      let val = value.map(item => item.value)
      window.$toast({content: '你选中了值：' + val})
    }
  },
  data () {
    return {
      pickerOpen: false,
      pickers: [
        {
          value: '010101',
          options: areas['0101']
        }
      ],
      pickerAddressOpen: false,
      addressPickers: [
        {
          value: '01',
          options: [
            {
              value: '01',
              label: '广东省'
            },
            {
              value: '02',
              label: '广西壮族自治区'
            }
          ]
        },
        {
          value: '0101',
          options: citys['01']
        },
        {
          value: '010101',
          options: areas['0101']
        }
      ]
    }
  }
}
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| confirmText     | 完成文字   | String  |   -       |    完成    |
| cancelText     | 取消文字   | String  |   -       |    取消    |
| pickers     | picker数组[{value,option,placeholder}]   | Array  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 值改变事件 | - |
| confirm | 完成事件 | - |
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |