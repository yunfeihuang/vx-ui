<template>
  <layout class="demos img-demos">
    <x-nav slot="header" back="/">
      <div slot="title">Preview</div>
    </x-nav>
    <x-body slot="body" class="img-container">
      <x-img
        v-for="(item,index) in images"
        :key="index" :loading="true"
        :src="item.src"
        @load="handleLoad(index,$event)"
        @click.native="handleClick(index)"/>
    </x-body>
    <preview :list="images" ref="preview"/>
  </layout>
</template>

<script>
let windowWidth = window.innerWidth
export default {
  data () {
    return {
      images: [
        {
          src: 'http://assets.bittyos.com/images/swiper/01.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/02.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/03.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/04.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/05.jpg'
        }
      ]
    }
  },
  methods: {
    handleLoad (index, e) {
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
      this.images[index] = item
    },
    handleClick (index) {
      this.$refs.preview.open(index)
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
