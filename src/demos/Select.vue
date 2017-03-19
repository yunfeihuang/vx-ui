<template>
  <div class="demos">
    <h1>XSelect</h1>
    <group>
      <cell>
        <div slot="title">下拉框</div>
        <x-select 
          slot="value"
          :options="options"
          :value="value"
          placeholder="请选择"
          @on-change="changeHandler"
        />
      </cell>
    </group>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  XSelect
} from 'components'
export default {
  components: {
    Group,
    Cell,
    XSelect
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
  data () {
    return {
      value: '',
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
          label: '高尔夫'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
