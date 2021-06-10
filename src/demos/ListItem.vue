<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="ListItem"></vx-nav>
    </template>
    <vx-page-body>
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
          <template v-slot:prepend>prepend</template>
          <template v-slot:append>append</template>
        </list-item>
      </group>
      <group title="slot checkbox && action">
        <list-item
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <template v-slot:checkbox><checkbox></checkbox></template>
          <b>标题</b>
          <div>内容....</div>
          <template v-slot:action><vx-button type="primary" size="small">选中</vx-button></template>
        </list-item>
      </group>
      <group title="slot append-action">
        <list-item
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
          <template v-slot:append-action>
            <vx-button type="primary" size="small">编辑</vx-button>
            <vx-button type="primary" size="small">删除</vx-button>
          </template>
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
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
}
</script>
