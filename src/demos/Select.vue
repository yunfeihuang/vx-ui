<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Select"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group>
        <vx-cell :arrow="false">
          <template v-slot:title>下拉框({{label}})</template>
          <template v-slot:value>
          <vx-select
            v-model="value"
            v-model:label="label"
            clearable
            placeholder="请选择">
            <vx-option
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :label="item.label"
              :key="item.value"/>
          </vx-select>
          </template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>下拉框option含html并且打开框不产生浏览器地址历史记录</template>
          <template v-slot:value>
          <vx-select
            v-model="value"
            :popup-props="{direction: 'center', history: false}"
            placeholder="请选择">
            <vx-option
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :label="item.label"
              :key="item.value">
              <span style="color:red">red color</span>{{item.label}}
            </vx-option>
          </vx-select>
          </template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>下拉框(多选)</template>
          <template v-slot:value>
          <vx-select
            v-model="value2"
            :max="0"
            placeholder="请选择">
            <vx-option
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :label="item.label"
              :key="item.value"/>
          </vx-select>
          </template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>下拉框(最多选2个)</template>
          <template v-slot:value>
          <vx-select
            v-model="value3"
            :max="2"
            placeholder="请选择">
            <vx-option
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :label="item.label"
              :key="item.value"/>
          </vx-select>
          </template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>下拉框(不限选项)</template>
          <template v-slot:value>
          <vx-select
            v-model="value4"
            :max="0"
            placeholder="请选择">
            <vx-option value="-1" exclusive>不限</vx-option>
            <vx-option
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :label="item.label"
              :key="item.value"/>
          </vx-select>
          </template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
  </vx-page>
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
      value: 1,
      value2: [],
      value3: [],
      value4: [''],
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
          label: '乒乓球'
        },
        {
          value: 4,
          label: '高尔夫',
          disabled: true
        },
        {
          value: 5,
          label: '篮球'
        },
        {
          value: 6,
          label: '羽毛球'
        },
        {
          value: 7,
          label: '乒乓球'
        },
        {
          value: 8,
          label: '篮球'
        },
        {
          value: 9,
          label: '羽毛球'
        },
        {
          value: 10,
          label: '乒乓球'
        },
        {
          value: 11,
          label: '高尔夫'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
