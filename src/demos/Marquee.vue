<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Marquee"></vx-nav>
    </template>
    <vx-page-body>
      <vx-marquee>
        <vx-marquee-item>
          天猫双十一优惠！
        </vx-marquee-item>
        <vx-marquee-item>
          京东618优惠！
        </vx-marquee-item>
      </vx-marquee>
      <vx-marquee direction="horizontal">
        <vx-marquee-item>
          天猫双十一优惠！
        </vx-marquee-item>
        <vx-marquee-item>
          京东618优惠！
        </vx-marquee-item>
      </vx-marquee>
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
}
</script>
