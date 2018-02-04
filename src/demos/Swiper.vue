<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Swiper</div>
    </x-nav>
    <x-body slot="body" style="background:#fff">
      <swiper :active="active" :pagination="true" @change="handleChange" :options="options" class="swiper-demo">
        <swiper-item>
          <img src="http://assets.bittyos.com/images/swiper/01.jpg" class="swiper-img" />
        </swiper-item>
        <swiper-item>
          <img src="http://assets.bittyos.com/images/swiper/02.jpg" class="swiper-img" />
        </swiper-item><swiper-item>
          <img src="http://assets.bittyos.com/images/swiper/03.jpg" class="swiper-img" />
        </swiper-item><swiper-item>
          <img src="http://assets.bittyos.com/images/swiper/04.jpg" class="swiper-img" />
        </swiper-item><swiper-item>
          <img src="http://assets.bittyos.com/images/swiper/05.jpg" class="swiper-img" />
        </swiper-item>
      </swiper>
    </x-body>
  </layout>
</template>

<script>
export default {
  methods: {
    handleChange (value) {
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
    .swiper-img{
      min-height:120px;
    }
  }
</style>
