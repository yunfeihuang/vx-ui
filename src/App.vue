<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @include var-color($color-black);
}
a{
  @include var-color($color-primary);
  text-decoration: none;
  box-sizing: border-box;
  cursor: default;
}
</style>
