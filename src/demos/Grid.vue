<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Grid"></vx-nav>
    </template>
    <vx-page-body>
      <vx-grid :col="3">
        <vx-grid-item v-for="item in 10" :key="item">
          <strong>{{item}}</strong> <br />
          项目
        </vx-grid-item>
      </vx-grid>
      <br />
      <vx-grid :col="3">
        <vx-grid-item>
          <strong>1</strong> <br />
          项目
        </vx-grid-item>
        <vx-grid-item :col="2">
          <strong>2</strong> <br />
          项目
        </vx-grid-item>
        <vx-grid-item>
          <strong>3</strong> <br />
          项目
        </vx-grid-item>
      </vx-grid>
      <br />
      <vx-grid :col="3" :gutter="10">
        <vx-grid-item v-for="item in 10" :key="item">
          <strong>{{item}}</strong> <br />
          项目
        </vx-grid-item>
      </vx-grid>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
