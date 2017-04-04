<template>
  <div class="demos">
    <h1>Range</h1>
    <group>
      <div style="padding:10px;background:#fff;">
        <range :value="value" :min="min" :step="step" @on-change="changeHandler"></range>
      </div>
    </group>
  </div>
</template>

<script>
import {
  Range,
  Group
} from '../components'
export default {
  components: {
    Range,
    Group
  },
  methods: {
    changeHandler (value) {
      this.value = value
    }
  },
  data () {
    return {
      min: 10,
      value: 20,
      step: 1
    }
  }
}
</script>

<style lang="scss">

</style>
