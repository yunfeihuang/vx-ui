<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="AvatarGroup"></vx-nav>
    </template>
    <vx-page-body>
      <div style="padding:0.3rem">
        <vx-avatar-group>
          <!--需要a>img 标签结构-->
          <a v-for="item in 5" :key="item">
            <img src="/images/github.png"/>
          </a>
          <template v-slot:append>+888</template>
        </vx-avatar-group>
        <br />
        <vx-avatar-group>
          <a v-for="item in 15" :key="item">
            <img src="/images/github.png"/>
          </a>
          <template v-slot:append>+888</template>
        </vx-avatar-group>
      </div>
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
}
</script>
<style lang="scss">

</style>
