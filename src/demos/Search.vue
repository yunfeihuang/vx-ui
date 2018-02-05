<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Search</div>
    </x-nav>
    <x-body slot="body"  class="demos img-demos">
      <search v-model="value" placeholder="搜索商品/商店/用户"
        @submit="handleSubmit">
        <template slot="keywords" slot-scope="scope">
          <span class="keyword" @click="scope.search('上海')">
            上海
          </span>
          <span class="keyword" @click="scope.search('武汉')">
            武汉
          </span>
          <span class="keyword" @click="scope.search('深圳')">
            深圳
          </span>
          <span class="keyword" @click="scope.search('南京')">
            南京
          </span>
          <span class="keyword" @click="scope.search('北京')">
            北京
          </span>
        </template>
        <div slot="result" style="text-align:center;padding:15px">
          搜索结果显示
        </div>
      </search>
    </x-body>
  </layout>
</template>

<script>
export default {
  methods: {
    handleSubmit (value) {
      console.log('handleSubmit')
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
