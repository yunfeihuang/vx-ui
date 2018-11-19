<template>
  <layout>
    <div slot="header">
      <x-nav back="/" back-text="返回" title="Nav">
        <button class="btn-pull" slot="pull">
          更多
        </button>
      </x-nav>
      <br />
      <x-nav back="/" back-text="返回" type="primary" title="Nav">
        <button class="btn-pull" slot="pull">
          更多
        </button>
      </x-nav>
      <tab :active.sync="active" :underline-width="10">
        <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
      </tab>
    </div>
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
