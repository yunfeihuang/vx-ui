<template>
  <page>
    <x-nav slot="header" back="/" title="Palace"></x-nav>
    <x-body slot="body">
      <palace :grid="3">
        <palace-item v-for="item in 10" :key="item">
          <strong>{{item}}</strong> <br />
          项目
        </palace-item>
      </palace>
      <br />
      <palace :grid="3">
        <palace-item>
          <strong>1</strong> <br />
          项目
        </palace-item>
        <palace-item :col="2">
          <strong>2</strong> <br />
          项目
        </palace-item>
        <palace-item>
          <strong>3</strong> <br />
          项目
        </palace-item>
      </palace>
      <br />
      <palace :grid="3" :gutter="10">
        <palace-item v-for="item in 10" :key="item">
          <strong>{{item}}</strong> <br />
          项目
        </palace-item>
      </palace>
    </x-body>
  </page>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
