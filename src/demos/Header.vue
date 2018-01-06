<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">XNav</div>
      <button class="btn-pull" slot="pull">
        <icon>&#xe78d;</icon>
      </button>
    </x-nav>
    <x-body slot="body">
      
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  XBody,
  Icon
} from 'components'
export default {
  components: {
    Layout,
    XNav,
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
