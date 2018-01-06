<template>
  <header>
    <div class="wrapper">
      <img style="width:40px;height:40px" src="https://cn.vuejs.org/images/logo.png"/>
      <h2>Vue-Components</h2>
    </div>
  </header>
</template>

<script>
  export default {}
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
    .wrapper{
      padding:10px 0;
    }
  }
</style>
