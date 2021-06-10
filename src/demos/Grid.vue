<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Grid"></vx-nav>
    </template>
    <vx-page-body>
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
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
