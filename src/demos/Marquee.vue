<template>
  <layout>
    <x-nav slot="header" back="/">
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
