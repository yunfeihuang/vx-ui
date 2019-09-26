<template>
  <layout>
    <x-nav slot="header" back="/" title="SubmitBar"></x-nav>
    <x-body slot="body"></x-body>
    <div slot="footer">
      <submit-bar>
        <template>
          <checkbox>同意xxx协议</checkbox>
        </template>
        <x-button slot="button" type="primary">提交</x-button>
      </submit-bar>
      <br />
      <submit-bar
        tips="您的收货地址不支持同城送, 我们已为您推荐快递">
        <template>
          总计：<span class="vx-color-error">￥200</span>
        </template>
        <x-button slot="button" type="primary">提交</x-button>
      </submit-bar>
      <br />
      <submit-bar>
        <x-button slot="button">取消</x-button>
        <x-button slot="button" type="primary">提交</x-button>
      </submit-bar>
    </div>
  </layout>
</template>

<script>
export default {
}
</script>

<style lang="scss">

</style>
