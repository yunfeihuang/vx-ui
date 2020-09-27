<template>
  <page>
    <x-nav slot="header" title="AvatarGroup"></x-nav>
    <page-body slot="body">
      <div style="padding:0.3rem">
        <avatar-group>
          <!--需要a>img 标签结构-->
          <a v-for="item in 5" :key="item">
            <img src="https://avatars3.githubusercontent.com/u/1342149?s=88&u=f5dff8f2b904e4694574af75740cb66ac5b54c5d&v=4" alt="" />
          </a>
          <span slot="append">+888</span>
        </avatar-group>
        <br />
        <avatar-group>
          <a v-for="item in 15" :key="item">
            <img src="https://avatars3.githubusercontent.com/u/1342149?s=88&u=f5dff8f2b904e4694574af75740cb66ac5b54c5d&v=4" alt="" />
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
