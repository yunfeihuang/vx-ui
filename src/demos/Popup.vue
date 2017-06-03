<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Popup</div>
    </x-header>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">popup default</div>
          <x-switch slot="value" :value="checked" @on-change="changeHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup top</div>
          <x-switch slot="value" :value="checkedTop" @on-change="changeTopHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup left</div>
          <x-switch slot="value" :value="checkedLeft" @on-change="changeLeftHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup right</div>
          <x-switch slot="value" :value="checkedRight" @on-change="changeRightHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup center</div>
          <x-switch slot="value" :value="checkedCenter" @on-change="changeCenterHandler"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup full</div>
          <x-switch slot="value" :value="fullChecked" @on-change="changeFullHandler"/>
        </cell>
      </group>
    </x-body>
    <popup :open="checked" @on-close="changeHandler">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checked" @on-change="changeHandler"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="top" :open="checkedTop" @on-close="changeTopHandler">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedTop" @on-change="changeTopHandler"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="left" :open="checkedLeft" @on-close="changeLeftHandler">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedLeft" @on-change="changeLeftHandler"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="right" :open="checkedRight" @on-close="changeRightHandler">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedRight" @on-change="changeRightHandler"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="center" :open="checkedCenter" @on-close="changeCenterHandler">
      <div style="padding:20px;min-width:200px;background:#fff;border-radius:5px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedCenter" @on-change="changeCenterHandler"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup :open="fullChecked"  @on-close="changeFullHandler" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" :value="fullChecked" @on-change="changeFullHandler"/>
          </cell>
        </group>
      </div>
    </popup>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Group,
  Cell,
  XSwitch,
  Popup
} from 'components'

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    XSwitch,
    Popup
  },
  methods: {
    changeHandler () {
      this.checked = !this.checked
    },
    changeTopHandler () {
      this.checkedTop = !this.checkedTop
    },
    changeLeftHandler () {
      this.checkedLeft = !this.checkedLeft
    },
    changeRightHandler () {
      this.checkedRight = !this.checkedRight
    },
    changeCenterHandler () {
      this.checkedCenter = !this.checkedCenter
    },
    changeFullHandler () {
      this.fullChecked = !this.fullChecked
    }
  },
  data () {
    return {
      checked: false,
      checkedTop: false,
      checkedLeft: false,
      checkedRight: false,
      checkedCenter: false,
      fullChecked: false
    }
  }
}
</script>

<style lang="scss">

</style>
