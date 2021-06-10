<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Carousel"></vx-nav>
    </template>
    <vx-page-body>
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
    </vx-page-body>
  </vx-page>
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
