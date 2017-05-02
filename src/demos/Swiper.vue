<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Swiper</div>
    </x-header>
    <x-body slot="body" style="background:#fff">
      <swiper :active="active" @on-change="changeHandler" :options="options" class="swiper-demo">
        <swiper-item>
          <img src="http://assets.bittyos.com/images/gallery/img1.jpg" />
        </swiper-item>
        <swiper-item>
          <img src="http://assets.bittyos.com/images/gallery/img2.jpg" />
        </swiper-item>
        <swiper-item>
          <img src="http://assets.bittyos.com/images/gallery/img3.jpg" />
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
  SwiperItem
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Swiper,
    SwiperItem
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
  }
</style>
