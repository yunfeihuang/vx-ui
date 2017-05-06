<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Flexbox</div>
    </x-header>
    <x-body slot="body" >
      <flexbox>
        <flex-item>
          fdsafdsa
        </flex-item>
      </flexbox>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Flexbox,
  FlexItem
} from '../components'

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Flexbox,
    FlexItem
  }
}
</script>

<style lang="scss">

</style>
