<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Nav">
        <template v-slot:append>
          <button class="vx-nav--button">登录</button>
        </template>
      </vx-nav>
      <br />
      <vx-nav title-center title="Nav">
        <template v-slot:prepend>
          <button class="vx-nav--button">注册</button>
        </template>
        <template v-slot:append>
          <button class="vx-nav--button">注册</button>
          <button class="vx-nav--button">登录</button>
        </template>
      </vx-nav>
      <br />
      <vx-nav title-center title="Nav" type="primary">
        <template v-slot:append>
          <button class="vx-nav--button">登录</button>
        </template>
      </vx-nav>
      <br />
      <vx-nav
        title-center
        type="primary"
        title="含搜索框的Nav"
        :search-collapse="collapse">
        <template v-slot:search>
          <input class="vx-nav--search-input" type="text" placeholder="请输入商品名称"/>
        </template>
        <template v-slot:append>
          <button class="vx-nav--button" @click="collapse=!collapse">{{collapse ? '展开' : '收起'}}</button>
        </template>
        <vx-tab v-model:active="active" :underline-width="10">
          <vx-tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</vx-tab-item>
        </vx-tab>
      </vx-nav>
    </template>
    <vx-page-body  @scroll="handleScroll">
      <vx-cell v-for="(item,index) in 20" :key="index" title="github" value="Start me">
        <template v-slot:icon><img :src="'/images/github.png'" style="height:20px;width:20px;border-radius:50%"></template>
      </vx-cell>
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
  data () {
    return {
      collapse: false,
      tabs: [
        {name: 'recommed', label: '推荐'},
        {name: 'it', label: '科技'},
        {name: 'active', label: '活动'},
        {name: 'find', label: '发现'}
      ],
      active: 'recommed'
    }
  },
  methods: {
    handleScroll (e) {
      this.collapse = e.target.scrollTop > 80
    }
  }
}
</script>
