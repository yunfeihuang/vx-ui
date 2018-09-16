<template>
  <layout>
    <x-nav slot="header" back="/" title="Divider"></x-nav>
    <x-body slot="body">
      <div style="background:#fff;margin:15px 0;padding:1px 10px;line-height:0.9rem;">
        标题
        <divider></divider>
        内容....
      </div>
    </x-body>
  </layout>
</template>
<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children]
}
</script>
