<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Marquee</div>
    </x-nav>
    <x-body slot="body" style="background:#fff">
      <marquee>
        <marquee-item>
          天猫双十一优惠！
        </marquee-item>
        <marquee-item>
          京东618优惠！
        </marquee-item>
      </marquee>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  Marquee,
  MarqueeItem
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    Marquee,
    MarqueeItem
  },
  methods: {
    changeHandler (value) {
      this.active = value
    }
  },
  data () {
    return {
      active: 0
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
