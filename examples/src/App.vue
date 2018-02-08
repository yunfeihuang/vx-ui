<template>
  <div class="example-root">
    <x-header/>
    <div class="example-body">
      <sidebar @click.native="toTop"/>
      <div class="markdown-body">
        <router-view></router-view>
      </div>
      <div class="example-iphone">
        <div class="example-iphone-iframe">
          <iframe :src="toDemo" frameborder="0"></iframe>
          <div class="example-iphone-home" @click="handleHome"></div>
        </div>
        <div class="example-iphone-code">
          <div class="example-iphone-code-item" style="margin-right:40px;">
            <qrcode :text="toDemo" :height="100" :width="100" />
            示例预览
          </div>
          <div class="example-iphone-code-item">
            <img :src="'./static/images/pay-code.png'" style="vertical-align: inherit;" :height="100" :width="100" />
            打赏赞助
          </div>
        </div>
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
    XHeader,
    XFooter,
    Sidebar
  },
  computed: {
    toDemo () {
      let path = this.$route.path === '/' ? '/' : '/#/demos' + this.$route.path
      if (location.host.indexOf(':8082') > -1) {
        if (!location.origin) {
          location.origin = location.protocol + '//' + location.host
        }
        return location.origin.replace(':8082', ':8080') + path
      } else {
        return 'http://vx.bittyos.com/demo' + path
      }
    }
  },
  methods: {
    handleHome () {
      console.log(this)
    },
    toTop (e) {
      if (/^a$/i.test(e.target.nodeName)) {
        document.body.scrollTop = document.documentElement.scrollTop = 0
      }
    }
  }
}
</script>
<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  $color-iphone-border: rgba(0,0,0,0.3);
  label{
    font-weight:normal;
  }
  a{
    color:$color-primary;
    text-decoration: none!important;
    box-sizing: border-box;
    &.router-link-active{
      @include active;
    }
  }
  .wrapper{
    max-width:1200px;
    margin: 0 auto;
  }
  .example{
    &-body{
      padding-top:56px;
      aside{
        width:220px;
        padding-left:20px;
        overflow: auto;
        position:fixed;
        height: calc(100% - 55px);
        &::-webkit-scrollbar{  
          width: 5px;
          height:10px;
        }  
        &::-webkit-scrollbar-track{
          background-color:#fff;
        }
        &::-webkit-scrollbar-thumb{
          border-radius: 10px;
          background-color:rgba(0,0,0,0.2);
        } 
      }
      .markdown-body{
        padding-left:250px;
        padding-right:400px;
        h4{
          margin-top:30px;
        }
      }
    }
    &-iphone{
      background:#fff;
      position:fixed;
      top:70px;
      right:30px;
      z-index:1;
      width:340px;
      text-align:center;
      &-home{
        position:absolute;
        left:50%;
        border:1px solid $color-iphone-border;
        width:45px;
        height:45px;
        bottom:30px;
        border-radius:100%;
        margin-left:-25px;
        margin-bottom:-20px;
        z-index:100;
      }
      &-iframe{
        box-shadow:0 0 0 1px $color-iphone-border;
        border-radius:40px;
        padding:40px 10px 60px 10px;
        position:relative;
        &:before{
          content:'';
          position:absolute;
          left:50%;
          border:1px solid $color-iphone-border;
          width:50px;
          height:6px;
          top:21px;
          border-radius:3px;
          margin-left:-25px;
          margin-top:-4px;
        }
        iframe{
          border:1px solid $color-iphone-border;
          width:320px;
          height:480px;
        }
      }
      &-code{
        position:fixed;
        top:662px;
        text-align:center;
        width:340px;
        &-item{
          width:100px;
          display:inline-block;
        }
      }
    }
    &-root{
      font-family: Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #666;
      font-size:14px;
      .markdown-body {
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
        pre{
          border: 1px solid #eaeefb;
          background-color: #fafafa;
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
  }
</style>
