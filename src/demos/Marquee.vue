<template>
  <layout>
    <x-nav slot="header" :back="{path:'/'}">
      <div slot="title">Marquee</div>
    </x-nav>
    <x-body slot="body" style="background:#fff">
      <x-marquee>
        <x-marquee-item>
          天猫双十一优惠！
        </x-marquee-item>
        <x-marquee-item>
          京东618优惠！
        </x-marquee-item>
      </x-marquee>
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
