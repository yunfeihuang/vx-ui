<template>
  <page>
    <div slot="header">
      <x-nav title="Nav">
        <button class="vx-nav--button" slot="append">
          登录
        </button>
      </x-nav>
      <br />
      <x-nav title-center title="Nav">
        <button class="vx-nav--button" slot="prepend">
          注册
        </button>
        <button class="vx-nav--button" slot="append">
          注册
        </button>
        <button class="vx-nav--button" slot="append">
          登录
        </button>
      </x-nav>
      <br />
      <x-nav title-center title="Nav" type="primary">
        <button class="vx-nav--button" slot="append">
          登录
        </button>
      </x-nav>
      <br />
      <x-nav
        title-center
        type="primary"
        title="含搜索框的Nav"
        :search-collapse="collapse">
        <input class="vx-nav--search-input" slot="search" type="text" placeholder="请输入商品名称"/>
        <button class="vx-nav--button" slot="append" @click="collapse=!collapse">
          {{collapse ? '展开' : '收起'}}
        </button>
        <tab :active.sync="active" :underline-width="10">
          <tab-item v-for="item in tabs" :name="item.name" :key="item.key">{{item.label}}</tab-item>
        </tab>
      </x-nav>
    </div>
    <page-body slot="body" @scroll="handleScroll">
      <cell v-for="(item,index) in 20" :key="index" title="github">
        <img slot="icon" :src="'./static/images/github.png'" style="height:20px;width:20px;border-radius:50%">
        <span slot="value">Start me</span>
      </cell>
    </page-body>
  </page>
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
