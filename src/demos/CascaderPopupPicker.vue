<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="CascaderPopupPicker"></vx-nav>
    </template>
    <vx-page-body>
      <group :title="`级联选择器弹框：${value}`">
        <cell :arrow="false">
          <template v-slot:title>开关</template>
          <template v-slot:value><vx-switch v-model="open" /></template>
        </cell>
      </group>
    </vx-page-body>
    <cascader-popup-picker v-model:open="open" v-model="value" :options="options"/>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      value: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }]
      }]
    }
  }
}
</script>
