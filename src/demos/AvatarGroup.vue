<template>
  <page>
    <x-nav slot="header" title="AvatarGroup"></x-nav>
    <page-body slot="body">
      <div style="padding:0.3rem">
        <avatar-group>
          <!--需要a>img 标签结构-->
          <a v-for="item in 5" :key="item">
            <img src="/static/images/avatar.png"/>
          </a>
          <span slot="append">+888</span>
        </avatar-group>
        <br />
        <avatar-group>
          <a v-for="item in 15" :key="item">
            <img src="/static/images/avatar.png"/>
          </a>
          <span slot="append">+888</span>
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
