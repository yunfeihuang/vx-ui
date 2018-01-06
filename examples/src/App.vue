<template>
  <div class="frame-docs">
    <x-header/>
    <div class="frame-body wrapper">
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
  }
}
</script>
<style lang="scss">
  .wrapper{
    width:1200px;
    margin: 0 auto;
  }
  .frame{
    &-body{
      padding-top:70px;
    }
    &-docs{
      aside{
        position:fixed;
        top:0;
        padding-top:70px;
        width:200px;
        height:100%;
        overflow:auto;
        z-index:100;
      }
      .markdown-body {
        padding-left:220px;
        h2{
          margin-top:0
        }
        /*
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
        */
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
  }
</style>
