<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Preview"></vx-nav>
    </template>
    <vx-page-body>
      <img
        v-for="(item,index) in images"
        :key="index"
        :src="item"
        style="display:block;width:100%;min-height:150px;"
        @click="handleClick(index)"/>
    </vx-page-body>
    <vx-preview :list="images" ref="preview"/>
  </vx-page>
</template>

<script>
import '@/components/style/src/theme/preview.scss'
import VxPreview from '@/components/preview'
let windowWidth = window.innerWidth
export default {
  components: {
    VxPreview
  },
  data () {
    return {
      images: [
        'http://assets.bittyos.com/images/swiper/01.jpg',
        'http://assets.bittyos.com/images/swiper/02.jpg',
        'http://assets.bittyos.com/images/swiper/03.jpg',
        'http://assets.bittyos.com/images/swiper/04.jpg',
        'http://assets.bittyos.com/images/swiper/05.jpg',
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
