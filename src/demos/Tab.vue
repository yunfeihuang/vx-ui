<template>
  <layout>
    <div slot="header">
      <x-nav back="/" title="Tab"></x-nav>
      <div v-if="pageState.into">
        <tab :active.sync="active">
          <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
        </tab>
        <tab :active.sync="active" :underline-width="10">
          <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
        </tab>
        <tab :active.sync="active" underline-width="auto">
          <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
        </tab>
      </div>
    </div>
    <x-body slot="body" style="background:#fff" :scroll="false" v-if="pageState.into">
      
    </x-body>
  </layout>
</template>

<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
  data () {
    return {
      tabs: [
        {name: 'recommed', label: '推荐'},
        {name: 'it', label: '科技'},
        {name: 'active', label: '活动'},
        {name: 'find', label: '发现'}
      ],
      active: 'recommed'
    }
  }
}
</script>

<style lang="scss">

</style>
