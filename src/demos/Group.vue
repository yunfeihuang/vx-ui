<template>
  <layout>
    <x-nav slot="header" back="/" title="Group"></x-nav>
    <x-body slot="body">
      <group title="default">
        <cell :arrow="false">
          <div slot="title">开关（{{checked}}）</div>
          <x-switch slot="value" v-model="checked" />
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
      checked: true
    }
  }
}
</script>
