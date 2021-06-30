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
  </vx-page>
</template>

<script>
export default {
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
    handleClick (index) {
      this.$preview({
        index,
        list: this.images
      })
    }
  }
}
</script>

<style lang="scss">

</style>
