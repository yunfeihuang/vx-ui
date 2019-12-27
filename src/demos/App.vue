<template>
  <div class="demo-app">
    <page :style="`opacity:1;transform:translateX(0)`">
      <x-nav slot="header" title-center :is-back="false" title="Vx UI Demos"></x-nav>
      <page-body class="demos" slot="body">
        <div style="text-align:center">
          <flexbox class="friend-link">
            <flexbox-item>
              <a target="_blank" href="https://github.com/yunfeihuang/vx-ui">
                <x-img class="friend-link-img" :src="'./static/images/github.png'"/>
                <br/>
                star me
              </a>
            </flexbox-item>
            <flexbox-item>
              <a target="_blank" href="http://vx.bittyos.com/react/">
                <x-img class="friend-link-img" :src="'./static/images/react.png'"/>
                <br/>
                react版本
              </a>
            </flexbox-item>
          </flexbox>
        </div>
        <group title="basic">
          <cell title="Theme" to="/demos/theme"></cell>
          <cell title="Button" to="/demos/button"></cell>
          <cell title="Page" to="/demos/page"></cell>
          <cell title="Flexbox" to="/demos/flexbox"></cell>
          <cell title="Nav" to="/demos/nav"></cell>
          <cell title="Heading" to="/demos/heading"></cell>
          <cell title="Group" to="/demos/group"></cell>
          <cell title="Palace" to="/demos/palace"></cell>
          <cell title="Cell" to="/demos/cell"></cell>
          <cell title="ListItem" to="/demos/listitem"></cell>
          <cell title="SubmitBar" to="/demos/submitbar"></cell>
          <cell title="Divider" to="/demos/divider"></cell>
          <cell title="Message" to="/demos/message"></cell>
        </group>
        <group title="form表单">
          <cell title="Input" to="/demos/input"></cell>
          <cell title="Textarea" to="/demos/textarea"></cell>
          <cell title="Password" to="/demos/password"></cell>
          <cell title="InputNumber" to="/demos/inputnumber"></cell>
          <cell title="Select" to="/demos/select"></cell>
          <cell title="Switch" to="/demos/switch"></cell>
          <cell title="Radio" to="/demos/radio"></cell>
          <cell title="Checkbox" to="/demos/checkbox"></cell>
          <cell title="Checker" to="/demos/checker"></cell>
          <cell title="Range" to="/demos/range"></cell>
          <cell title="Datetime" to="/demos/datetime"></cell>
          <cell title="Daterange" to="/demos/daterange"></cell>
          <cell title="Cascader" to="/demos/cascader"></cell>
          <cell title="Rater" to="/demos/rater"></cell>
          <cell title="Search" to="/demos/search"></cell>
          <cell title="Form" to="/demos/form"></cell>
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
          <cell title="DropdownMenu" to="/demos/dropdownmenu"></cell>
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
        </group>
        <group title="其他">
          <cell title="Badge" to="/demos/badge"></cell>
          <cell title="Accordion" to="/demos/accordion"></cell>
          <cell title="Calendar" to="/demos/calendar"></cell>
          <cell title="CalendarRange" to="/demos/calendarrange"></cell>
          <cell title="Picker" to="/demos/picker"></cell>
          <cell title="CascaderPicker" to="/demos/cascaderpicker"></cell>
          <cell title="Ripple" to="/demos/ripple"></cell>
          <cell title="ListView" to="/demos/listview"></cell>
          <cell title="Sticky" to="/demos/sticky"></cell>
          <cell title="Swipeout" to="/demos/swipeout"></cell>
          <cell title="Spinner" to="/demos/spinner"></cell>
          <cell title="IndexList" to="/demos/indexlist"></cell>
        </group>
      </page-body>
    </page>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    // console.log(this.$router.push)
  }
}
</script>
<style lang="scss">
  .friend-link{
    width:200px;
    margin: 0 auto;
    text-align:center;
    padding-top:0.3rem;
    margin-bottom: -0.2rem;
    line-height:1;
    &-img{
      border-radius:50%;
      height:40px;
      width:40px;
      display: inline-block;
      margin-bottom:10px;
    }
  }
  .demo-app{
    max-width:100vw;
    max-height:100vh;
    overflow:hidden;
    .react-version{
      text-align:center;
    }
    .vx-page{
      opacity:0;
      transition: transform 0.32s ease 0s;
      transform: translate3d(100%,0,0);
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      backface-visibility: hidden;
      perspective: 1000;
    }
  }
</style>
