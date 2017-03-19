<template>
  <div class="full-vh demos">
    <h1>Tab</h1>
    <tab :active="active" @on-change="changeHandler">
      <tab-item>选项卡1</tab-item>
      <tab-item>选项卡2</tab-item>
      <tab-item>选项卡3</tab-item>
      <tab-item>选项卡4</tab-item>
    </tab>
  </div>
</template>

<script>
import {
  Tab,
  TabItem
} from '../components'
export default {
  components: {
    Tab,
    TabItem
  },
  methods: {
    changeHandler (value) {
      this.active = value
    }
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss">
  
</style>
