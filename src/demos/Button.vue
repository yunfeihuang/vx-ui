<template>
  <div class="demos button-demo">
    <h1>XButton</h1>
    <x-button>default</x-button>
    <x-button type="primary">primary</x-button>
    <x-button type="dashed">dashed</x-button>
    <x-button type="warning">warning</x-button>
    <x-button type="primary" disabled>disabled</x-button>
  </div>
</template>

<script>
import {
  XButton
} from '../components'
export default {
  components: {
    XButton
  },
  data () {
    return {
      account: '',
      password: ''
    }
  }
}
</script>

<style lang="scss">
  .button-demo{
    padding:0 1rem;
    height:100vh;
    background:#fff;
    button{
      margin-top:20px;
    }
  }
</style>
