<template>
  <layout>
    <x-header slot="header">
      <div slot="title">XHeader</div>
      <button class="btn-pull" slot="pull">
        <i class="iconfont">&#xe78d;</i>
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
  XBody
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">

</style>
