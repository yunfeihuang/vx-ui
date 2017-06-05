<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Ripple</div>
    </x-header>
    <x-body slot="body">
      <group class="ripple-demo">
        <ripple @click="clickHandler">
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple>
          点击我会出现波纹
        </ripple>
        <divider></divider>
        <ripple color="rgba(255,0,0,0.1)">
          自定义颜色(prop color:rgba(255,0,0,0.1))
        </ripple>
      </group>
      
    </x-body>
    <div slot="footer">
      <div style="text-align:center;padding:10px">
        ripple prop position:center
      </div>
      <tabbar :ripple="true" :active="active" @on-change="changeHandler">
        <tabbar-item text="主页" icon="&#xe651;"/>
        <tabbar-item text="消息" icon="&#xe653;"/>
        <tabbar-item text="我的" icon="&#xe63b;"/>
      </tabbar>
    </div>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Group,
  Cell,
  Ripple,
  Tabbar,
  TabbarItem,
  Divider
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Cell,
    Ripple,
    Tabbar,
    TabbarItem,
    Divider
  },
  methods: {
    clickHandler (e) {
      console.log(e)
    },
    changeHandler (active) {
      this.active = active
    }
  },
  data () {
    return {
      active: 0
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
