<template>
  <div class="demos">
    <h1>XSwitch</h1>
    <group>
      <cell :arrow="false">
        <div slot="title">开关</div>
        <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
      </cell>
    </group>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  XSwitch
} from 'components'
export default {
  components: {
    Group,
    Cell,
    XSwitch
  },
  methods: {
    changeHandler (value) {
      this.checked = value
    }
  },
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style lang="scss">

</style>
