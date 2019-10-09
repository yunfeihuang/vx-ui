<template>
  <layout>
    <x-nav slot="header" back="/" title="InputNumber"></x-nav>
    <x-body slot="body">
      <group title="default">
        <cell title="value" :arrow="false">
          <input-number slot="value" v-model="minValue" :min="1"/>
        </cell>
      </group>
      <group title="small">
        <cell title="value" :arrow="false">
          <input-number size="small" slot="value" v-model="minValue" :min="1"/>
        </cell>
      </group>
      <group title="disabled">
        <cell title="value" :arrow="false">
          <input-number slot="value" v-model="value" :step="0.01" disabled/>
        </cell>
      </group>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      minValue: 1
    }
  }
}
</script>
