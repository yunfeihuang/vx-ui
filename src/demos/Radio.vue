<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Radio"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="Radio" class="radio-wrapper">
        <vx-radio name="radio1">篮球</vx-radio>
        <vx-divider></vx-divider>
        <vx-radio name="radio1">羽毛球</vx-radio>
      </vx-group>
      <vx-group title="RadioGroup">
        <vx-radio-group v-model="value">
          <vx-radio
            v-for="item in options"
            :disabled="item.disabled"
            :key="item.value"
            :value="item.value"
            >
              {{item.label}}
          </vx-radio>
        </vx-radio-group>
        <div style="padding:15px 10px;">
          value：{{value}}
        </div>
      </vx-group>
    </vx-page-body>
  </vx-page>
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
