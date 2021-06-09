<template>
    <vx-checker-group v-model="values">
      <vx-checker v-for="item in 10" :key="item" :value="item">
        test{{item}}
      </vx-checker>
    </vx-checker-group>
    {{values}}
    <vx-radio-group v-model="value">
      <vx-radio v-for="item in 10" :key="item" :value="item">
        test{{item}}
      </vx-radio>
    </vx-radio-group>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <vx-input v-model="value" @input="handleInput"></vx-input>
    <vx-switch v-model="on"></vx-switch>{{on}}
    {{value}}
    
  </div>
  <router-view/>
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
