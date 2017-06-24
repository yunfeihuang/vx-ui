<template>
  <layout>
    <x-header slot="header">
      <div slot="title">XHeader</div>
      <button class="btn-pull" slot="pull">
        <icon>&#xe78d;</icon>
      </button>
    </x-header>
    <x-body slot="body">
      
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Icon
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Icon
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">

</style>
