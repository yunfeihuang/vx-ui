<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Checkbox</div>
    </x-nav>
    <x-body slot="body">
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
    </x-body>
  </layout>
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
