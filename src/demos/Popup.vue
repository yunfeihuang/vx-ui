<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Popup</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">popup default</div>
          <x-switch slot="value" v-model="checked"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup top</div>
          <x-switch slot="value" v-model="checkedTop"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup left</div>
          <x-switch slot="value" v-model="checkedLeft"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup right</div>
          <x-switch slot="value" v-model="checkedRight"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup center</div>
          <x-switch slot="value" v-model="checkedCenter"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup full</div>
          <x-switch slot="value" v-model="fullChecked"/>
        </cell>
      </group>
    </x-body>
    <popup :open.sync="checked">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="checked"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="top" :open.sync="checkedTop">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="checkedTop"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="left" :open.sync="checkedLeft">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="checkedLeft"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="right" :open.sync="checkedRight">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="checkedRight"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="center" :open.sync="checkedCenter">
      <div style="padding:20px;min-width:200px;background:#fff;border-radius:5px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="checkedCenter" />
          </cell>
        </group>
      </div>
    </popup>
    <popup :open.sync="fullChecked" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" v-model="fullChecked"/>
          </cell>
        </group>
      </div>
    </popup>
  </layout>
</template>

<script>
export default {
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
