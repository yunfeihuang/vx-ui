<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Tab"></vx-nav>
      <div>
        <vx-tab v-model:active="active">
          <vx-tab-item
            v-for="item in tabs.slice(0,4)"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </vx-tab-item>
        </vx-tab>
        <vx-tab v-model:active="active" :underline-width="10">
          <vx-tab-item
            v-for="item in tabs.slice(0,4)"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </vx-tab-item>
        </vx-tab>
        <vx-tab v-model:active="active" underline-width="auto">
          <vx-tab-item
            v-for="item in tabs.slice(0,4)"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </vx-tab-item>
        </vx-tab>
        <vx-tab v-model:active="active" :underline-width="10" minTabItemWidth="20vw">
          <vx-tab-item
            v-for="item in tabs"
            :name="item.name"
            :key="item.key">
            {{item.label}}
          </vx-tab-item>
        </vx-tab>
      </div>
    </template>
    <vx-page-body  :scroll="false">
    </vx-page-body>
  </vx-page>
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
