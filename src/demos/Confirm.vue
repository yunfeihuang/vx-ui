<template>
  <div class="demos">
    <h1>Confirm</h1>
    <group>
      <cell :arrow="false">
        <div slot="title">开关</div>
        <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
      </cell>
    </group>
    <confirm :open="checked" @on-cancel="changeHandler" @on-confirm="changeHandler">确认删除？</confirm>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  XSwitch,
  Confirm
} from 'components'
export default {
  components: {
    Group,
    Cell,
    XSwitch,
    Confirm
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
