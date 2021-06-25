<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Picker"></vx-nav>
    </template>
    <vx-page-body>
      <vx-message type="warning">注意：此示例要在移动设备体验哦~</vx-message>
      <vx-group :title="'value：'+value">
        <vx-picker placeholder="请选择" :modelValue="value" :columns="columns" @change="handleChange"></vx-picker>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
const district = {
  '001': [
    {
      value: '00101',
      label: '天河区'
    },
    {
      value: '00102',
      label: '越秀区'
    },
    {
      value: '00103',
      label: '海珠区'
    },
    {
      value: '00104',
      label: '南沙区'
    },
    {
      value: '00105',
      label: '黄埔区'
    }
  ],
  '002': [
    {
      value: '00201',
      label: '南山区'
    },
    {
      value: '00202',
      label: '福田区'
    },
    {
      value: '00203',
      label: '罗湖区'
    },
    {
      value: '00204',
      label: '宝安区'
    },
    {
      value: '00205',
      label: '龙华区'
    }
  ]
}
export default {
  data () {
    return {
      columns: [
        [
          {
            value: '001',
            label: '广州'
          },
          {
            value: '002',
            label: '深圳'
          }
        ],
        district['001']
      ],
      value: ['001', '00102']
    }
  },
  methods: {
    handleChange ({index, value}) {
      if (index == 0) {
        let columns = [...this.columns]
        columns[index + 1] = district[value]
        let modelValue = [...this.value]
        modelValue[index + 1] = district[value][0].value
        modelValue[index] = value
        this.columns = columns
        this.value = modelValue
      }
    }
  }
}
</script>
