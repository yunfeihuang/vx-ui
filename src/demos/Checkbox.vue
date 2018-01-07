<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Checkbox</div>
    </x-nav>
    <x-body slot="body">
      <group title="Checkbox">
        <checkbox :checked.sync="checked">{{checked}}</checkbox>
      </group>
      <group title="CheckboxGroup">
        <checkbox-group :label.sync="label" :options="options" @on-change="changeHandler" :value="value"/>
        <div style="padding:15px 10px;">
          value：{{value}} label: {{label}}
        </div>
      </group>
      <group title="CheckboxGroup-Reverse">
        <checkbox-group direction="reverse" :options="options" @on-change="changeReverseHandler" :value="reverseValue"/>
        <div style="padding:15px 10px;">
        value：{{reverseValue}}
        </div>
      </group>
      <group title="CheckboxGroup最多选2个">
        <checkbox-group direction="reverse" :checked-max-item="2" :options="options" @on-change="changeReverseHandler" :value="reverseValue"/>
        <div style="padding:15px 10px;">
        value：{{reverseValue}}
        </div>
      </group>
    </x-body>
  </layout>
</template>

<script>
export default {
  methods: {
    changeHandler (value) {
      this.value = value
    },
    changeReverseHandler (value) {
      this.reverseValue = value
    }
  },
  data () {
    return {
      label: [],
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

<style lang="scss">
  
</style>
