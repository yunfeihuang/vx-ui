<template>
  <layout>
    <x-nav slot="header" back="/" title="Popover"></x-nav>
    <x-body slot="body" style="padding:15px;" v-if="pageState.into">
      <flexbox style="margin-bottom:300px">
        <flexbox-item>
          <popover :open="true">
            <x-button slot="trigger">left top</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right top</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <popover>
            <x-button slot="trigger">left bottom</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right bottom</x-button>
            <ul class="popover-menu">
              <li @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
    </x-body>
  </layout>
</template>

<script>
import { children } from 'utils/mixins/page'
export default {
  mixins: [children],
  methods: {
    handleClick (value) {
      this.$toast({message: '您点击了：' + value})
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
      min-width:1.8rem;
      line-height:0.9rem;
      padding:0 15px;
    }
  }
</style>
