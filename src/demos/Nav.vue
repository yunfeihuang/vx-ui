<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Nav</div>
      <button class="btn-pull" slot="pull">
        <icon>&#xe78d;</icon>
      </button>
      <tab :active.sync="active" :underline-width="10">
        <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
      </tab>
    </x-nav>
    <x-body slot="body"></x-body>
  </layout>
</template>
<script>
export default {
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
