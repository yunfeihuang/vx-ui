<template>
  <layout class="demos img-demos">
    <x-nav slot="header" back="/">
      <div slot="title">Preview</div>
    </x-nav>
    <x-body id="body" slot="body" class="img-container">
      <x-img :loading="true" data-index="0" src="http://assets.bittyos.com/images/swiper/01.jpg" @load="handleLoad" @click.native="handleClick"/>
      <!--<sticky scroll-box="body" :offset="46"><div>fdafdafdsafdasf</div></sticky>-->
      <x-img :loading="true" data-index="1" src="http://assets.bittyos.com/images/swiper/02.jpg" @load="handleLoad" @click.native="handleClick"/>
      <x-img :loading="true" data-index="2" src="http://assets.bittyos.com/images/swiper/03.jpg" @load="handleLoad" @click.native="handleClick"/>
      <x-img :loading="true" data-index="3" src="http://assets.bittyos.com/images/swiper/04.jpg" @load="handleLoad" @click.native="handleClick"/>
      <x-img :loading="true" data-index="4" src="http://assets.bittyos.com/images/swiper/05.jpg" @load="handleLoad" @click.native="handleClick"/>
    </x-body>
    <preview :list="images" ref="preview"/>
  </layout>
</template>

<script>
let windowWidth = window.innerWidth

export default {
  data () {
    return {
      images: [{}, {}, {}]
    }
  },
  methods: {
    handleLoad (e) {
      let img = e.target
      let natural = {
        w: img.naturalWidth,
        h: img.naturalHeight
      }
      let item = {
        src: img.src,
        w: natural.w > windowWidth ? windowWidth : natural.w,
        h: natural.w > windowWidth ? natural.h / natural.w * windowWidth : natural.h
      }
      this.images[e.target.parentNode.dataset.index] = item
    },
    handleClick (e) {
      this.$refs.preview.open(parseInt(e.target.parentNode.dataset.index))
    }
  }
}
</script>

<style lang="scss">
  .img-demos img{
    display:block;
    width:100%;
  }
  .img-container>div{
    min-height:150px;
  }
</style>
