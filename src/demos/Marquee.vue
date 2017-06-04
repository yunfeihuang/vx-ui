<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Marquee</div>
    </x-header>
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
  XHeader,
  XBody,
  Marquee,
  MarqueeItem
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
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
