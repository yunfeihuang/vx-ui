<template>
  <button type="button" class="dot">{{typesText[type]}}</button>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      typesText: {
        top: '置顶',
        good: '精华',
        share: '分享',
        ask: '问答',
        job: '招人'
      }
    }
  }
}
</script>

<style lang="scss">
  .dot{
    font-size: 12px;
    border-radius: 2px;
    display: inline-block;
    background-color: #3399ff;
    color: #fff;
    border: 0;
    padding: .05rem;
    vertical-align: middle;
    margin-right:2px;
  }
</style>
