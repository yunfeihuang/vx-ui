<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Layout --- header area</div>
    </x-nav>
    <flexbox-item slot="body">body area</flexbox-item>
    <div slot="footer">footer area</div>
    <div>other area</div>
  </layout>
</template>
<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children]
}
</script>
