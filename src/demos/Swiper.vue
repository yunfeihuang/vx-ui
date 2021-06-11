<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Swiper"></vx-nav>
    </template>
    <vx-page-body>
      <vx-swiper v-model:active="active" :options="options">
        <vx-swiper-item v-for="(item,index) in images" :key="index">
          <img :src="item" style="max-width:100%;min-height:120px;" />
        </vx-swiper-item>
      </vx-swiper>
      <br />
      <center>渐变切换</center>
      <vx-swiper v-model:active="active" :options="{effect: 'fade', speed: 500}">
        <vx-swiper-item v-for="(item,index) in images" :key="index">
          <img :src="item" style="max-width:100%;min-height:120px;" />
        </vx-swiper-item>
      </vx-swiper>
    </vx-page-body>
  </vx-page>
</template>

<script>
// import 'vx-ui/lib/style/theme/swiper.scss'
// import {Swiper, SwiperItem} from 'vx-ui/lib/swiper'
export default {
  // components: {Swiper, SwiperItem},
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
