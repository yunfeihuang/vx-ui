<template>
  <div class="demos">
    <h1>Ripple</h1>
    <group class="ripple-demo">
      <ripple @click="clickHandler">
        点击我会出现波纹
      </ripple>
      <divider></divider>
      <ripple>
        点击我会出现波纹
      </ripple>
      <divider></divider>
      <ripple>
        点击我会出现波纹
      </ripple>
    </group>
  </div>
</template>

<script>
import {
  Group,
  Cell,
  Ripple,
  Divider
} from 'components'
export default {
  components: {
    Group,
    Cell,
    Ripple,
    Divider
  },
  methods: {
    clickHandler (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
  .ripple-demo{
    line-height:44px;
    text-indent:10px;
  }
</style>
