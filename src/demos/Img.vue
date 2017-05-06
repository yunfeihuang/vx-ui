<template>
  <layout class="demos img-demos">
    <x-header slot="header">
      <div slot="title">XImg</div>
    </x-header>
    <x-body slot="body" class="scrollbox">
      <div class="img-container">
        <x-img @click="clickHandler" @load="loadHandler" src="http://assets.bittyos.com/images/gallery/img1.jpg" :loading="true"/>
      </div>
      <div class="img-container">
        <x-img @click="clickHandler" @load="loadHandler" src="http://assets.bittyos.com/images/gallery/img2.jpg" :loading="true"/>
      </div>
      <div class="img-container">
        <x-img @click="clickHandler" @load="loadHandler" src="http://assets.bittyos.com/images/gallery/img3.jpg" :loading="true"/>
      </div>
    </x-body>
    <preview :list="images" ref="preview"/>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  XImg,
  Preview
} from '../components'

let windowWidth = window.innerWidth

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XImg,
    Preview
  },
  data () {
    return {
      images: []
    }
  },
  methods: {
    loadHandler (e) {
      let img = e.target
      let natural = {
        w: img.naturalWidth,
        h: img.naturalHeight
      }
      let item = {
        src: img.src,
        w: natural.w > windowWidth ? windowWidth : img.w,
        h: natural.w > windowWidth ? natural.h / natural.w * windowWidth : img.h
      }
      this.images.push(item)
    },
    clickHandler (e) {
      let index = 0
      this.images.forEach((item, i) => {
        if (item.src === e.target.src) {
          index = i
        }
      })
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
  .img-demos .img-container{
    min-height:400px;
  }
</style>
