<template>
  <page>
    <x-nav slot="header" title="Grid"></x-nav>
    <page-body slot="body">
      <grid :col="3">
        <grid-item v-for="item in 10" :key="item">
          <strong>{{item}}</strong> <br />
          项目
        </grid-item>
      </grid>
      <br />
      <grid :col="3">
        <grid-item>
          <strong>1</strong> <br />
          项目
        </grid-item>
        <grid-item :col="2">
          <strong>2</strong> <br />
          项目
        </grid-item>
        <grid-item>
          <strong>3</strong> <br />
          项目
        </grid-item>
      </grid>
      <br />
      <grid :col="3" :gutter="10">
        <grid-item v-for="item in 10" :key="item">
          <strong>{{item}}</strong> <br />
          项目
        </grid-item>
      </grid>
    </page-body>
  </page>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
