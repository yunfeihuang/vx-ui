<template>
  <layout>
    <x-nav slot="header" back="/" title="Swiper"></x-nav>
    <x-body slot="body" style="background:#fff" v-if="slideIn">
      <swiper :active.sync="active" :options="options">
        <swiper-item v-for="(item,index) in images" :key="index">
          <img :src="item" style="max-width:100%;min-height:120px;" />
        </swiper-item>
      </swiper>
      <br />
      <center>渐变切换</center>
      <swiper :active.sync="active" :options="{effect: 'fade', speed: 500}">
        <swiper-item v-for="(item,index) in images" :key="index">
          <img :src="item" style="max-width:100%;min-height:120px;" />
        </swiper-item>
      </swiper>
    </x-body>
  </layout>
</template>

<script>
import {Swiper, SwiperItem} from '../components/swiper' // import {Swiper, SwiperItem} from 'vx-ui/lib/swiper'
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data () {
    return {
      images: [
        'http://assets.bittyos.com/images/swiper/01.jpg',
        'http://assets.bittyos.com/images/swiper/02.jpg',
        'http://assets.bittyos.com/images/swiper/03.jpg',
        'http://assets.bittyos.com/images/swiper/04.jpg',
        'http://assets.bittyos.com/images/swiper/05.jpg'
      ],
      active: 0,
      options: {
        speed: 500
      }
    }
  }
}
</script>

<style lang="scss">

</style>
