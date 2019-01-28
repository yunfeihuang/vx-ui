<template>
  <layout type="primary">
    <x-nav slot="header" back="/" title="Marquee"></x-nav>
    <x-body slot="body" v-if="slideIn">
      <x-marquee>
        <x-marquee-item>
          天猫双十一优惠！
        </x-marquee-item>
        <x-marquee-item>
          京东618优惠！
        </x-marquee-item>
      </x-marquee>
      <x-marquee direction="horizontal">
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
}
</script>
