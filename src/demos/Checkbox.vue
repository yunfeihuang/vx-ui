<template>
  <page>
    <x-nav slot="header" title="Checkbox"></x-nav>
    <x-body slot="body">
      <group title="Checkbox">
        <checkbox :checked.sync="checked" style="margin:0 0.15rem">{{checked}}</checkbox>
      </group>
      <group title="Checkbox icon-style='checkbox'">
        <checkbox :checked.sync="checked" icon-style="checkbox" style="margin:0 0.15rem">{{checked}}</checkbox>
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
      <group title="CheckboxGroup Change Icon style And inline style">
        <checkbox-group v-model="value" inline style="padding: 15px 10px;">
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
      <group title="CheckboxGroup-IconPosition">
        <checkbox-group icon-position="right" v-model="reverseValue">
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
      <group title="CheckboxGroup最多选1个(单选框)">
        <checkbox-group :max="1" v-model="value2">
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
        value：{{value2}}
        </div>
      </group>
      <group title="CheckboxGroup 不限选项">
        <checkbox-group v-model="value">
          <checkbox value="" exclusive>不限</checkbox>
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
      <group title="自定义checkbox样式">
        <checkbox-group :max="1" v-model="reverseValue" :divider="false">
          <checkbox
             v-for="item in options"
            :disabled="item.disabled"
            :value="item.value"
            :key="item.value"
            >
            <template slot-scope="scope">
              <span :style="`color:${scope.checked?'red':''}`">
                {{item.label}}
              </span>
            </template>
          </checkbox>
        </checkbox-group>
        <div style="padding:15px 10px;">
        value：{{reverseValue}}
        </div>
      </group>
    </x-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      checked: false,
      value: [1],
      value2: 1,
      options: [
        {
          value: 1,
          label: '篮球'
        },
        {
          value: 2,
          label: '羽毛球'
        },
        {
          value: 3,
          label: '乒乓球',
          disabled: true
        },
        {
          value: 4,
          label: '高尔夫'
        }
      ],
      reverseValue: [1]
    }
  }
}
</script>
