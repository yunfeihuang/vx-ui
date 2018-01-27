<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Popup</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">popup default</div>
          <x-switch slot="value" :value="checked" @on-change="handleChange"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup top</div>
          <x-switch slot="value" :value="checkedTop" @on-change="handleChangeTop"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup left</div>
          <x-switch slot="value" :value="checkedLeft" @on-change="handleChangeLeft"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup right</div>
          <x-switch slot="value" :value="checkedRight" @on-change="handleChangeRight"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup center</div>
          <x-switch slot="value" :value="checkedCenter" @on-change="changeChandleEnter"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup full</div>
          <x-switch slot="value" :value="fullChecked" @on-change="handleChangeFull"/>
        </cell>
      </group>
    </x-body>
    <popup :open="checked" @on-close="handleChange">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checked" @on-change="handleChange"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="top" :open="checkedTop" @on-close="handleChangeTop">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedTop" @on-change="handleChangeTop"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="left" :open="checkedLeft" @on-close="handleChangeLeft">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedLeft" @on-change="handleChangeLeft"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="right" :open="checkedRight" @on-close="handleChangeRight">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedRight" @on-change="handleChangeRight"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="center" :open="checkedCenter" @on-close="changeChandleEnter">
      <div style="padding:20px;min-width:200px;background:#fff;border-radius:5px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" :value="checkedCenter" @on-change="changeChandleEnter"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup :open="fullChecked"  @on-close="handleChangeFull" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" :value="fullChecked" @on-change="handleChangeFull"/>
          </cell>
        </group>
      </div>
    </popup>
  </layout>
</template>

<script>
export default {
  methods: {
    handleChange () {
      this.checked = !this.checked
    },
    handleChangeTop () {
      this.checkedTop = !this.checkedTop
    },
    handleChangeLeft () {
      this.checkedLeft = !this.checkedLeft
    },
    handleChangeRight () {
      this.checkedRight = !this.checkedRight
    },
    changeChandleEnter () {
      this.checkedCenter = !this.checkedCenter
    },
    handleChangeFull () {
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
