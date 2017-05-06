<template>
  <layout class="demos img-demos">
    <x-header slot="header">
      <div slot="title">Preview</div>
    </x-header>
    <x-body slot="body" class="scrollbox">
      <div class="img-container">
        <img data-index="0" src="http://assets.bittyos.com/images/gallery/img1.jpg" @load="loadHandler" @click="clickHandler"/>
        <img data-index="1" src="http://assets.bittyos.com/images/gallery/img2.jpg" @load="loadHandler" @click="clickHandler"/>
        <img data-index="2" src="http://assets.bittyos.com/images/gallery/img3.jpg" @load="loadHandler" @click="clickHandler"/>
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
  Preview
} from '../components'

let windowWidth = window.innerWidth

export default {
  components: {
    Layout,
    XHeader,
    XBody,
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
        w: natural.w > windowWidth ? windowWidth : natural.w,
        h: natural.w > windowWidth ? natural.h / natural.w * windowWidth : natural.h
      }
      this.images.push(item)
    },
    clickHandler (e) {
      this.$refs.preview.open(parseInt(e.target.dataset.index))
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
