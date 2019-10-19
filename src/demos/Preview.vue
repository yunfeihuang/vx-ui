<template>
  <page>
    <x-nav slot="header" title="Preview(点击图片浏览图片)"></x-nav>
    <x-body slot="body" v-if="slideIn">
      <img
        v-for="(item,index) in images"
        :key="index"
        :src="item.src"
        style="display:block;width:100%;min-height:150px;"
        @load="handleLoad(index,$event)"
        @click="handleClick(index)"/>
    </x-body>
    <preview :list="images" ref="preview"/>
  </page>
</template>

<script>
import 'vx-ui/lib/style/theme/preview.scss'
import Preview from 'vx-ui/lib/preview'
let windowWidth = window.innerWidth
export default {
  components: {
    Preview
  },
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

</style>
