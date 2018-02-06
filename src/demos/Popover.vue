<template>
  <layout>
    <x-nav slot="header" back="/">
      <div slot="title">Popover</div>
    </x-nav>
    <x-body slot="body" style="padding:15px;">
      <flexbox style="margin-bottom:300px">
        <flexbox-item>
          <popover :open="true">
            <x-button slot="trigger">left top</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right top</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <popover>
            <x-button slot="trigger">left bottom</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right bottom</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
    </x-body>
  </layout>
</template>

<script>
export default {
  methods: {
    handleClick (value) {
      this.$toast({content: '您点击了：' + value})
    }
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
    .v-iconfont{
      margin-right:8px;
    }
  }
</style>
