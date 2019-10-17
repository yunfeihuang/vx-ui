<template>
  <page>
    <x-nav slot="header" back="/" title="ListItem"></x-nav>
    <x-body slot="body">
      <group title="default">
        <list-item
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </list-item>
      </group>
      <group title="arrow">
        <list-item
          arrow
          image-style="width:24vw"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </list-item>
      </group>
      <group title="slot prepend&append">
        <list-item
          arrow
          image-style="width:24vw"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
          <div slot="prepend">prepend</div>
          <div slot="append">append</div>
        </list-item>
      </group>
      <group title="slot action">
        <list-item
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
          <x-button type="primary" size="small" slot="action">选中</x-button>
        </list-item>
      </group>
      <group title="slot append-action">
        <list-item
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
          <div slot="append-action" style="text-align:right">
            <x-button type="primary" size="small">编辑</x-button>
            <x-button type="primary" size="small">删除</x-button>
          </div>
        </list-item>
      </group>
      <group title="divider">
        <list-item
          v-for="(item,index) in 3"
          divider
          :key="index"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </list-item>
      </group>
      <group title="half-divider">
        <list-item
          v-for="(item,index) in 3"
          half-divider
          :key="index"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </list-item>
      </group>
    </x-body>
  </page>
</template>

<script>
export default {
}
</script>
