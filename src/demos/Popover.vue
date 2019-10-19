<template>
  <page>
    <x-nav slot="header" title="Popover"></x-nav>
    <x-body slot="body" style="padding:15px;" v-if="slideIn">
      <flexbox style="margin-bottom:300px">
        <flexbox-item>
          <popover open>
            <x-button slot="trigger">left top</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right top</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <popover>
            <x-button slot="trigger">left bottom</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right bottom</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
    </x-body>
  </page>
</template>

<script>
export default {
  methods: {
    handleClick (value) {
      this.$toast({message: '您点击了：' + value})
    }
  }
}
</script>

<style lang="scss">

</style>
