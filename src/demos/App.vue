<template>
  <div>
    <layout>
      <x-nav slot="header" :back="false">
        <div slot="title">Vx Demos</div>
      </x-nav>
      <x-body class="demos" slot="body">
        <div class="github">
          <a target="_blank" href="https://github.com/yunfeihuang/vx-ui">
            <img :src="'./static/images/github.png'"/>
            <br/>
            star me
          </a>
        </div>
        <group title="basic">
          <cell title="Button" to="/demos/button"></cell>
          <cell title="Flexbox" to="/demos/flexbox"></cell>
          <cell title="Nav" to="/demos/nav"></cell>
          <cell title="Group" to="/demos/group"></cell>
          <cell title="Cell" to="/demos/cell"></cell>
          <cell title="Divider" to="/demos/divider"></cell>
          <cell title="Message" to="/demos/message"></cell>
        </group>
        <group title="form表单">
          <cell title="Input" to="/demos/input"></cell>
          <cell title="Textarea" to="/demos/textarea"></cell>
          <cell title="Password" to="/demos/password"></cell>
          <cell title="Select" to="/demos/select"></cell>
          <cell title="Switch" to="/demos/switch"></cell>
          <cell title="Radio" to="/demos/radio"></cell>
          <cell title="Checkbox" to="/demos/checkbox"></cell>
          <cell title="Checker" to="/demos/checker"></cell>
          <cell title="Range" to="/demos/range"></cell>
          <cell title="Datetime" to="/demos/datetime"></cell>
          <cell title="Daterange" to="/demos/daterange"></cell>
          <cell title="Rater" to="/demos/rater"></cell>
          <cell title="Search" to="/demos/search"></cell>
        </group>
        <group title="对话弹框">
          <cell title="Actionsheet" to="/demos/actionsheet"></cell>
          <cell title="Alert" to="/demos/alert"></cell>
          <cell title="Confirm" to="/demos/confirm"></cell>
          <cell title="Prompt" to="/demos/prompt"></cell>
          <cell title="Popover" to="/demos/popover"></cell>
          <cell title="Toast" to="/demos/toast"></cell>
          <cell title="Popup" to="/demos/Popup"></cell>
          <cell title="PopupPicker" to="/demos/popuppicker"></cell>
        </group>
        <group title="选项卡">
          <cell title="Tab" to="/demos/tab"></cell>
          <cell title="Tabbar" to="/demos/tabbar"></cell>
          <cell title="Sidebar" to="/demos/sidebar"></cell>
          <cell title="ButtonTab" to="/demos/ButtonTab"></cell>
        </group>
        <group title="图片">
          <cell title="Img" to="/demos/img"></cell>
          <cell title="Swiper" to="/demos/swiper"></cell>
          <cell title="Preview" to="/demos/preview"></cell>
          <cell title="Qrcode" to="/demos/qrcode"></cell>
        </group>
        <group title="其他">
          <cell title="Badge" to="/demos/badge"></cell>
          <cell title="Picker" to="/demos/picker"></cell>
          <cell title="Ripple" to="/demos/ripple"></cell>
          <cell title="ListView" to="/demos/listview"></cell>
          <cell title="Sticky" to="/demos/sticky"></cell>
          <cell title="Swipeout" to="/demos/swipeout"></cell>
          <cell title="Spinner" to="/demos/spinner"></cell>
          <cell title="Marquee" to="/demos/marquee"></cell>
        </group>
        <!--
        <group title="basic">
          <cell title="Button" to="/demos/button"></cell>
        </group>
        -->
      </x-body>
    </layout>
    <router-view></router-view>
  </div>
</template>

<script>
// import MSwitch from 'vx-ui/lib/switch'
export default {
  mounted () {
    // console.log(this.$router.push)
  },
  methods: {
    tabbarhandleChange (active) {
      this.tabbarActive = active
    }
  },
  data () {
    return {
      tabbarActive: 0
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .github{
    text-align:center;
    padding-top:0.2rem;
    margin-bottom:-0.25rem;
    img{
      border-radius:50%;
      height:40px;
      width:40px;
    }
  }
</style>
