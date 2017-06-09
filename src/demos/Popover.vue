<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Popover</div>
    </x-header>
    <x-body slot="body" style="padding:15px;">
      <flexbox style="margin-bottom:300px">
        <flexbox-item>
          <popover :open="true">
            <x-button slot="trigger">left top</x-button>
            <ul class="popover-menu">
            	<li @click="clickHandler"><i class="iconfont">&#xe651;</i>扫一扫</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe727;</i>找朋友</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe654;</i>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right top</x-button>
            <ul class="popover-menu">
            	<li @click="clickHandler"><i class="iconfont">&#xe651;</i>扫一扫</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe727;</i>找朋友</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe654;</i>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <popover>
            <x-button slot="trigger">left bottom</x-button>
            <ul class="popover-menu">
            	<li @click="clickHandler"><i class="iconfont">&#xe651;</i>扫一扫</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe727;</i>找朋友</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe654;</i>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right bottom</x-button>
            <ul class="popover-menu">
            	<li @click="clickHandler"><i class="iconfont">&#xe651;</i>扫一扫</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe727;</i>找朋友</li>
              <divider></divider>
            	<li @click="clickHandler"><i class="iconfont">&#xe654;</i>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  XButton,
  Popover,
  Divider,
  Flexbox,
  FlexboxItem
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XButton,
    Popover,
    Divider,
    Flexbox,
    FlexboxItem
  },
  methods: {
    clickHandler (e) {
      console.log(e)
      window.$toast({content: '点击了：' + (e.target.closest('li') || e.target).innerText})
      // e.stopPropagation()
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  .popover-menu{
    list-style: none;
    padding: 0;
    margin: 0;
    li{
      min-width:80px;
      line-height:42px;
      padding:0 15px;
    }
    .iconfont{
      margin-right:8px;
    }
  }
</style>
