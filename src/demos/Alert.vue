<template>
  <div class="demos">
    <h1>Alert</h1>
    <group>
      <cell :arrow="false">
        <div slot="title">开关</div>
        <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
      </cell>
    </group>
    <alert :open="checked" @on-confirm="changeHandler">确认删除？</alert>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  XSwitch,
  Alert
} from 'components'
export default {
  components: {
    Group,
    Cell,
    XSwitch,
    Alert
  },
  methods: {
    changeHandler (value) {
      this.checked = !this.checked
    }
  },
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style lang="scss">

</style>
