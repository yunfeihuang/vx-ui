<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="ListItem"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <vx-list-item
          to="/demos"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </vx-list-item>
      </vx-group>
      <vx-group title="arrow">
        <vx-list-item
          arrow
          image-style="width:24vw"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </vx-list-item>
      </vx-group>
      <vx-group title="slot prepend&append">
        <vx-list-item
          arrow
          image-style="width:24vw"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
          <template v-slot:prepend>prepend</template>
          <template v-slot:append>append</template>
        </vx-list-item>
      </vx-group>
      <vx-group title="slot checkbox && action">
        <vx-list-item
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <template v-slot:checkbox><vx-checkbox></vx-checkbox></template>
          <b>标题</b>
          <div>内容....</div>
          <template v-slot:action><vx-button type="primary" size="small">选中</vx-button></template>
        </vx-list-item>
      </vx-group>
      <vx-group title="slot append-action">
        <vx-list-item
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
          <template v-slot:append-action>
            <vx-button type="primary" size="small">编辑</vx-button>
            <vx-button type="primary" size="small">删除</vx-button>
          </template>
        </vx-list-item>
      </vx-group>
      <vx-group title="divider">
        <vx-list-item
          v-for="(item,index) in 3"
          divider
          :key="index"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </vx-list-item>
      </vx-group>
      <vx-group title="half-divider">
        <vx-list-item
          v-for="(item,index) in 3"
          half-divider
          :key="index"
          image="http://assets.bittyos.com/images/swiper/01.jpg">
          <b>标题</b>
          <div>内容....</div>
        </vx-list-item>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
}
</script>
