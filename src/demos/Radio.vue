<template>
  <div class="demos">
    <h1>Radio</h1>
    <group>
      <radio-group :options="options" @on-change="changeHandler" name="radio" :value="value"/>
    </group>
  </div>
</template>

<script>
import {
  Radio,
  RadioGroup,
  Group
} from '../components'
export default {
  components: {
    Radio,
    RadioGroup,
    Group
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
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
