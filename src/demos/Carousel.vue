<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Carousel</div>
    </x-nav>
    <x-body slot="body" style="background:#fff">
      <carousel :active="active" :pagination="true" @change="handleChange" :options="options" class="swiper-demo">
        <carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/01.jpg"/>
        </carousel-item>
        <carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/02.jpg"/>
        </carousel-item><carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/03.jpg"/>
        </carousel-item><carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/04.jpg"/>
        </carousel-item><carousel-item>
          <img src="http://assets.bittyos.com/images/swiper/05.jpg"/>
        </carousel-item>
      </carousel>
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
