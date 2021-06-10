<template>
  <page type="primary">
    <div slot="header">
      <x-nav title="Tab"></x-nav>
      <div v-if="slideIn">
        <tab v-model:active="active">
          <tab-item
            v-for="item in tabs.slice(0,4)"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </tab-item>
        </tab>
        <tab v-model:active="active" :underline-width="10">
          <tab-item
            v-for="item in tabs.slice(0,4)"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </tab-item>
        </tab>
        <tab v-model:active="active" underline-width="auto">
          <tab-item
            v-for="item in tabs.slice(0,4)"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </tab-item>
        </tab>
        <tab v-model:active="active" :underline-width="10" minTabItemWidth="20vw">
          <tab-item
            v-for="item in tabs"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </tab-item>
        </tab>
      </div>
    </div>
    <page-body slot="body" :scroll="false">
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      tabs: [
        {name: 'recommed', label: '推荐'},
        {name: 'it', label: '科技'},
        {name: 'active', label: '活动'},
        {name: 'find', label: '发现'},
        {name: 'sort', label: '排行'},
        {name: 'msg', label: '消息'},
        {name: 'sns', label: '社区'}
      ],
      active: 'recommed'
    }
  }
}
</script>

<style lang="scss">

</style>
