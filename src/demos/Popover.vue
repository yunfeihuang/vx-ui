<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Popover"></vx-nav>
    </template>
    <vx-page-body  style="padding:15px;">
      <vx-flexbox style="margin-bottom:300px">
        <vx-flexbox-item>
          <vx-popover>
            <template v-slot:trigger><vx-button>left top</vx-button></template>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </vx-popover>
        </vx-flexbox-item>
        <vx-flexbox-item style="text-align:right">
          <vx-popover>
            <template v-slot:trigger><vx-button>right top</vx-button></template>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </vx-popover>
        </vx-flexbox-item>
      </vx-flexbox>
      <vx-flexbox>
        <vx-flexbox-item>
          <vx-popover>
            <template v-slot:trigger><vx-button>left bottom</vx-button></template>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </vx-popover>
        </vx-flexbox-item>
        <vx-flexbox-item style="text-align:right">
          <vx-popover>
            <template v-slot:trigger><vx-button>right bottom</vx-button></template>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <vx-divider></vx-divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </vx-popover>
        </vx-flexbox-item>
      </vx-flexbox>
    </vx-page-body>
  </vx-page>
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
