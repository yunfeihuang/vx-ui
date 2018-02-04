<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Popup</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <cell :arrow="false">
          <div slot="title">popup default</div>
          <x-switch slot="value" v-model="open"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup top</div>
          <x-switch slot="value" v-model="openTop"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup left</div>
          <x-switch slot="value" v-model="openLeft"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup right</div>
          <x-switch slot="value" v-model="openRight"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup center</div>
          <x-switch slot="value" v-model="openCenter"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup full</div>
          <x-switch slot="value" v-model="openFull"/>
        </cell>
      </group>
    </x-body>
    <popup :open.sync="open">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="open"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="top" :open.sync="openTop">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openTop"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="left" :open.sync="openLeft">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openLeft"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="right" :open.sync="openRight">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openRight"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="center" :open.sync="openCenter">
      <div style="padding:20px;min-width:200px;background:#fff;border-radius:5px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openCenter" />
          </cell>
        </group>
      </div>
    </popup>
    <popup :open.sync="openFull" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" v-model="openFull"/>
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
      open: false,
      openTop: false,
      openLeft: false,
      openRight: false,
      openCenter: false,
      openFull: false
    }
  }
}
</script>

<style lang="scss">

</style>
