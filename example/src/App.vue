<template>
  <div class="frame-docs">
    <x-header/>
    <div class="wrapper">
      <sidebar/>
      <div class="markdown-body">
        <router-view></router-view>
      </div>
    </div>
    <x-footer/>
  </div>
</template>

<script>
import XHeader from './components/XHeader'
import XFooter from './components/XFooter'
import Sidebar from './components/Sidebar'
// import markdown from './markdown.md'
// import 'highlight.js/styles/github.css'
// import 'github-markdown-css'

export default {
  components: {
    // markdown,
    XHeader,
    XFooter,
    Sidebar
  },
  mounted () {
    window.onhashchange = () => {
      let scrollTop = document.body.scrollTop = document.documentElement.scrollTop
      if (scrollTop > 86) {
        document.body.scrollTop = document.documentElement.scrollTop = 86
      }
    }
    // this.$el.querySelector('.sidebar-scrollbar-wrap').style.height = window.innerHeight - 112 + 'px'
  }
}
</script>
<style lang="scss">
  .frame-docs{
    .wrapper{
      width:1200px;
      margin: 0 auto;
    }
    >.wrapper{
      margin: 20px auto;
    }
    .markdown-body {
      .language-javascript,.language-html{
        font-size: 12px;
        padding: 18px 24px;
        background-color: #fafafa;
        border: 1px solid #eaeefb;
        margin-bottom: 25px;
        border-radius: 4px;
        -webkit-font-smoothing: auto;
        display: block;
      }
      table{
        width:100%;
        text-align: left;
        td, th{
          border-bottom:1px solid #f5f5f5;
          padding:8px;
        }
      }
    }
  }
</style>
