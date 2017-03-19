<template>
  <div class="full-vh demos" style="padding:0 15px">
    <h1>ButtonTab</h1>
    <button-tab :active="active" @on-change="changeHandler">
      <button-tab-item>选项1</button-tab-item>
      <button-tab-item>选项2</button-tab-item>
      <button-tab-item>选项3</button-tab-item>
      <button-tab-item>选项4</button-tab-item>
    </button-tab>
  </div>
</template>

<script>
import {
  ButtonTab,
  ButtonTabItem
} from '../components'
export default {
  components: {
    ButtonTab,
    ButtonTabItem
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
