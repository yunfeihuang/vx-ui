<template>
  <router-view/>
  <router-view name="demo"/>
</template>
<script>
  export default {
    data () {
      return {
        value: 10,
        values: [],
        on: false
      }
    },
    methods: {
      handleInput() {
        // console.log('val', val)
      }
    }
  }
</script>

<style>
body{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
