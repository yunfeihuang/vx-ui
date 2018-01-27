<template>
  <div class="example-root">
    <x-header/>
    <flexbox class="example-body">
      <sidebar/>
      <flexbox-item class="markdown-body">
        <router-view></router-view>
      </flexbox-item>
      <div class="example-iphone">
        <div class="example-iphone-iframe">
          <iframe :src="toDemo" frameborder="0"></iframe>
          <div class="example-iphone-home" @click="handleHome"></div>
        </div>
      </div>
    </flexbox>
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
      if (location.host.indexOf(':8082') > -1) {
        return location.origin.replace(':8082', ':8080') + '/#/demos' + this.$route.path
      }
    }
  },
  mounted () {
    window.onhashchange = () => {
      let scrollTop = document.body.scrollTop = document.documentElement.scrollTop
      if (scrollTop > 86) {
        document.body.scrollTop = document.documentElement.scrollTop = 86
      }
    }
  },
  methods: {
    handleHome () {
      console.log(this)
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
    color:$primary-color;
    text-decoration: none!important;
    box-sizing: border-box;
    cursor: default;
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
      padding-top:70px;
      aside{
        width:250px;
        padding-left:20px;
      }
    }
    &-iphone{
      width:450px;
      text-align:center;
      padding-left:50px;
      &-home{
        position:absolute;
        left:50%;
        border:1px solid $color-iphone-border;
        width:50px;
        height:50px;
        bottom:30px;
        border-radius:100%;
        margin-left:-25px;
        margin-bottom:-12px;
        z-index:100;
      }
      &-iframe{
        background:#fff;
        position:fixed;
        box-shadow:0 0 0 1px $color-iphone-border;
        border-radius:40px;
        padding:50px 10px 80px 10px;
        &:before{
          content:'';
          position:absolute;
          left:50%;
          border:1px solid $color-iphone-border;
          width:50px;
          height:6px;
          top:25px;
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
