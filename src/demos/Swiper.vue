<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Swiper</div>
    </x-header>
    <x-body slot="body" style="background:#fff">
      <swiper :active="active" @on-change="changeHandler" :options="options" class="swiper-demo">
        <swiper-item>
          <x-img src="http://assets.bittyos.com/images/gallery/img1.jpg" class="swiper-img" />
        </swiper-item>
        <swiper-item>
          <x-img src="http://assets.bittyos.com/images/gallery/img2.jpg" class="swiper-img" />
        </swiper-item>
        <swiper-item>
          <x-img src="http://assets.bittyos.com/images/gallery/img3.jpg" class="swiper-img" />
        </swiper-item>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Swiper,
  SwiperItem,
  XImg
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Swiper,
    SwiperItem,
    XImg
  },
  methods: {
    changeHandler (value) {
      this.active = value
    }
  },
  data () {
    return {
      active: 0,
      options: {
        speed: 500
      }
    }
  }
}
</script>

<style lang="scss">
  .swiper-demo{
    height:300px;
    img{
      max-width:100%;
    }
    .swiper-img{
      min-height:300px;
    }
  }
</style>
