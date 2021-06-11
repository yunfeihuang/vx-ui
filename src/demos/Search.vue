<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Search"></vx-nav>
    </template>
    <vx-page-body>
      <vx-search v-model="value" placeholder="搜索商品/商店/用户"
        @submit="handleSubmit">
        <template v-slot:keywords="scope">
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
        <template v-slot:result style="text-align:center;padding:15px">
          搜索结果显示
        </template>
      </vx-search>
      <vx-group title="聚焦不会固定在顶部的">
        <vx-search v-model="value" placeholder="搜索商品/商店/用户" :fixed-top="false" @input="handleInput"></vx-search>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  methods: {
    handleSubmit (value) {
      console.log('handleSubmit', value)
    },
    handleInput (value) {
      console.log('input:', value)
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
