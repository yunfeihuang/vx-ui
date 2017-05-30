<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Swiper</div>
    </x-header>
    <x-body slot="body" style="background:#fff">
      <swiper :active="active" :pagination="true" @on-change="changeHandler" :options="options" class="swiper-demo">
        <swiper-item>
          <x-img src="http://assets.bittyos.com/images/swiper/01.jpg" class="swiper-img" />
        </swiper-item>
        <swiper-item>
          <x-img src="http://assets.bittyos.com/images/swiper/02.jpg" class="swiper-img" />
        </swiper-item><swiper-item>
          <x-img src="http://assets.bittyos.com/images/swiper/03.jpg" class="swiper-img" />
        </swiper-item><swiper-item>
          <x-img src="http://assets.bittyos.com/images/swiper/04.jpg" class="swiper-img" />
        </swiper-item><swiper-item>
          <x-img src="http://assets.bittyos.com/images/swiper/05.jpg" class="swiper-img" />
        </swiper-item>
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
    img{
      max-width:100%;
    }
  }
</style>
