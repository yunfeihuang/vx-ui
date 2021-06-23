<template>
  <header>
    <div class="header-inner">
      <flexbox align="center">
        <flexbox-item>
          <img :src="'/images/logo.png'"/>
          <h2>Vx UI</h2>
        </flexbox-item>
        <a target="_blank" href="https://github.com/yunfeihuang/vx-ui" style="margin-right: 165px;">
          <img style="width:24px;height:24px" :src="'/images/github.png'"/> github
        </a>
      </flexbox>
    </div>
  </header>
</template>

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
    img {
      width:35px;
      height:35px;
      margin-right:10px;
    }
    .header-inner{
      padding:10px;
    }
  }
</style>
