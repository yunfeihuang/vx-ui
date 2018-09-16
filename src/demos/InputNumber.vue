<template>
  <layout>
    <x-nav slot="header" back="/" title="InputNumber"></x-nav>
    <x-body slot="body">
      <group title="default">
        <cell title="value" :arrow="false">
          <input-number slot="value" v-model="value" :step="0.01"/>
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
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
  data () {
    return {
      value: 0
    }
  }
}
</script>
