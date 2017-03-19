<template>
  <div class="demos">
    <h1>Popup</h1>
    <group>
      <cell :arrow="false">
        <div slot="title">popup default</div>
        <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
      </cell>
      <cell :arrow="false">
        <div slot="title">popup full</div>
        <x-switch slot="value" :checked="fullChecked" @on-change="changeFullHandler"></x-switch>
      </cell>
    </group>
    <popup :open="checked"  @on-close="changeHandler">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup default close</div>
            <x-switch slot="value" :checked="checked" @on-change="changeHandler"></x-switch>
          </cell>
        </group>
      </div>
    </popup>
    <popup :open="fullChecked"  @on-close="changeFullHandler" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" :checked="fullChecked" @on-change="changeFullHandler"></x-switch>
          </cell>
        </group>
      </div>
    </popup>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  XSwitch,
  Popup
} from 'components'
export default {
  components: {
    Group,
    Cell,
    XSwitch,
    Popup
  },
  methods: {
    changeHandler (value) {
      this.checked = !this.checked
    },
    changeFullHandler (value) {
      this.fullChecked = !this.fullChecked
    }
  },
  data () {
    return {
      checked: false,
      fullChecked: false
    }
  }
}
</script>

<style lang="scss">

</style>
