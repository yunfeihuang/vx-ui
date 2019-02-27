<template>
  <layout>
    <x-nav slot="header" back="/" title="Select"></x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
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
        <cell :arrow="false">
          <div slot="title">下拉框option含html并且打开框不产生浏览器地址历史记录</div>
          <x-select
            slot="value"
            :label.sync="label"
            v-model="value"
            :popup-props="{direction: 'center', history: false}"
            placeholder="请选择">
            <x-option
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :label="item.label"
              :key="item.value">
              <span style="color:red">red color</span>{{item.label}}
            </x-option>
          </x-select>
        </cell>
        <cell :arrow="false">
          <div slot="title">下拉框option含html</div>
          <x-select
            slot="value"
            :label.sync="label"
            v-model="value"
            :popup-props="{direction: 'center'}"
            placeholder="请选择">
            <x-option
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :label="item.label"
              :key="item.value">
              <span style="color:red">red color</span>{{item.label}}
            </x-option>
          </x-select>
        </cell>
        <cell :arrow="false">
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
        <cell :arrow="false">
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
        <cell :arrow="false">
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
    </x-body>
  </layout>
</template>

<script>
export default {
  mounted1 () {
    setTimeout(() => {
      let options = []
      for (let i = 0; i < 500; i++) {
        options.push({
          value: i + '',
          label: 'label-' + i
        })
      }
      this.options = options
    }, 1000)
  },
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

<style lang="scss">

</style>
