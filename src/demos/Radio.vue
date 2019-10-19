<template>
  <page>
    <x-nav slot="header" title="Radio"></x-nav>
    <x-body slot="body">
      <group title="Radio" class="radio-wrapper">
        <radio name="radio1">篮球</radio>
        <divider></divider>
        <radio name="radio1">羽毛球</radio>
      </group>
      <group title="RadioGroup">
        <radio-group v-model="value">
          <radio
            v-for="item in options"
            :disabled="item.disabled"
            :key="item.value"
            :value="item.value"
            >
              {{item.label}}
          </radio>
        </radio-group>
        <div style="padding:15px 10px;">
          value：{{value}}
        </div>
      </group>
    </x-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value: '1',
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

<style lang="scss">

</style>
