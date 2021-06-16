<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="SubmitBar"></vx-nav>
    </template>
    <vx-page-body></vx-page-body>
    <template v-slot:footer>
      <vx-submit-bar>
        <vx-checkbox>同意xxx协议</vx-checkbox>
        <template v-slot:button>
          <vx-button type="primary">提交</vx-button>
        </template>
      </vx-submit-bar>
      <br />
      <vx-submit-bar
        tips="您的收货地址不支持同城送, 我们已为您推荐快递">
        总计：<span class="vx-color-error">￥200</span>
        <template v-slot:button>
          <vx-button type="warning">提交</vx-button>
          <vx-button type="primary">提交</vx-button>
        </template>
      </vx-submit-bar>
      <br />
      <vx-submit-bar>
        <template v-slot:button>
          <vx-button>取消</vx-button>
          <vx-button type="primary">提交</vx-button>
        </template>
      </vx-submit-bar>
      <br />
      <vx-submit-bar>
        <template v-slot:button>
          <vx-button type="primary">提交</vx-button>
        </template>
      </vx-submit-bar>
    </template>
  </vx-page>
</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>
