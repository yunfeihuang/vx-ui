<template>
  <header>
    <div class="header-inner">
      <img style="width:35px;height:35px" :src="logo"/>
      <h2>VX UI</h2>
    </div>
  </header>
</template>

<script>
  import logo from '../../../src/assets/logo.png'
  export default {
    data () {
      return {
        logo
      }
    }
  }
</script>
<style lang="scss" scope>
  header{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    border-bottom: 1px solid #eee;
    background: #fff;
    z-index:101;
    h2{
      font-size: 20px;
      margin-left: 20px;
      color: #666;
      font-weight: normal;
    }
    img,h2{
      display:inline-block;
      vertical-align: middle;
      margin:0
    }
    .header-inner{
      padding:10px;
    }
  }
</style>
