<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Checker</div>
    </x-nav>
    <x-body slot="body">
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
    </x-body>
  </layout>
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
