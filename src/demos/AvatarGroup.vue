<template>
  <page>
    <template v-slot:header>
      <x-nav title="AvatarGroup"></x-nav>
    </template>
    <page-body>
      <div style="padding:0.3rem">
        <avatar-group>
          <!--需要a>img 标签结构-->
          <a v-for="item in 5" :key="item">
            <img src="/static/images/avatar.png"/>
          </a>
          <template v-slot:append>+888</template>
        </avatar-group>
        <br />
        <avatar-group>
          <a v-for="item in 15" :key="item">
            <img src="/static/images/avatar.png"/>
          </a>
          <template v-slot:append>+888</template>
        </avatar-group>
      </div>
    </page-body>
  </page>
</template>
<script>
export default {
}
</script>
<style lang="scss">

</style>
