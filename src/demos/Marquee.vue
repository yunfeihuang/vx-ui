<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Marquee"></vx-nav>
    </template>
    <vx-page-body  v-if="slideIn">
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
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
}
</script>
