<template>
  <div class="demo-app">
    <vx-page :style="`opacity:1;transform:translateX(0)`">
      <template v-slot:header>
        <vx-nav title-center :is-back="false" title="Vx UI Demos"></vx-nav>
      </template>
      <vx-page-body class="demos" >
        <div style="text-align:center">
          <vx-flexbox class="friend-link">
            <vx-flexbox-item>
              <a target="_blank" href="https://github.com/yunfeihuang/vx-ui">
                <vx-img class="friend-link-img" :src="'/images/github.png'"/>
                <br/>
                star me
              </a>
            </vx-flexbox-item>
            <vx-flexbox-item>
              <a target="_blank" href="http://vx.bittyos.com/react/">
                <vx-img class="friend-link-img" :src="'/images/react.png'"/>
                <br/>
                react版本
              </a>
            </vx-flexbox-item>
          </vx-flexbox>
        </div>
        <vx-group title="basic">
          <vx-cell title="Theme" to="/demos/theme"></vx-cell>
          <vx-cell title="Button" to="/demos/button"></vx-cell>
          <vx-cell title="Page" to="/demos/page"></vx-cell>
          <vx-cell title="Flexbox" to="/demos/flexbox"></vx-cell>
          <vx-cell title="Nav" to="/demos/nav"></vx-cell>
          <vx-cell title="Heading" to="/demos/heading"></vx-cell>
          <vx-cell title="Group" to="/demos/group"></vx-cell>
          <vx-cell title="Grid" to="/demos/grid"></vx-cell>
          <vx-cell title="Cell" to="/demos/cell"></vx-cell>
          <vx-cell title="ListItem" to="/demos/listitem"></vx-cell>
          <vx-cell title="SubmitBar" to="/demos/submitbar"></vx-cell>
          <vx-cell title="Divider" to="/demos/divider"></vx-cell>
          <vx-cell title="Message" to="/demos/message"></vx-cell>
        </vx-group>
        <vx-group title="form表单">
          <vx-cell title="Input" to="/demos/input"></vx-cell>
          <vx-cell title="Textarea" to="/demos/textarea"></vx-cell>
          <vx-cell title="Password" to="/demos/password"></vx-cell>
          <vx-cell title="InputNumber" to="/demos/inputnumber"></vx-cell>
          <vx-cell title="Select" to="/demos/select"></vx-cell>
          <vx-cell title="Switch" to="/demos/switch"></vx-cell>
          <vx-cell title="Radio" to="/demos/radio"></vx-cell>
          <vx-cell title="Checkbox" to="/demos/checkbox"></vx-cell>
          <vx-cell title="Checker" to="/demos/checker"></vx-cell>
          <vx-cell title="Range" to="/demos/range"></vx-cell>
          <vx-cell title="Datetime" to="/demos/datetime"></vx-cell>
          <vx-cell title="Daterange" to="/demos/daterange"></vx-cell>
          <vx-cell title="Cascader" to="/demos/cascader"></vx-cell>
          <vx-cell title="Rater" to="/demos/rater"></vx-cell>
          <vx-cell title="Search" to="/demos/search"></vx-cell>
          <vx-cell title="Form" to="/demos/form"></vx-cell>
        </vx-group>
        <vx-group title="对话弹框">
          <vx-cell title="Actionsheet" to="/demos/actionsheet"></vx-cell>
          <vx-cell title="Alert" to="/demos/alert"></vx-cell>
          <vx-cell title="Confirm" to="/demos/confirm"></vx-cell>
          <vx-cell title="Prompt" to="/demos/prompt"></vx-cell>
          <vx-cell title="Popover" to="/demos/popover"></vx-cell>
          <vx-cell title="Toast" to="/demos/toast"></vx-cell>
          <vx-cell title="Popup" to="/demos/Popup"></vx-cell>
          <vx-cell title="PopupPicker" to="/demos/popuppicker"></vx-cell>
          <vx-cell title="DropdownMenu" to="/demos/dropdownmenu"></vx-cell>
        </vx-group>
        <vx-group title="选项卡">
          <vx-cell title="Tab" to="/demos/tab"></vx-cell>
          <vx-cell title="Tabbar" to="/demos/tabbar"></vx-cell>
          <vx-cell title="Sidebar" to="/demos/sidebar"></vx-cell>
          <vx-cell title="ButtonTab" to="/demos/ButtonTab"></vx-cell>
        </vx-group>
        <vx-group title="图片">
          <vx-cell title="Img" to="/demos/img"></vx-cell>
          <vx-cell title="Swiper" to="/demos/swiper"></vx-cell>
          <vx-cell title="Preview" to="/demos/preview"></vx-cell>
        </vx-group>
        <vx-group title="其他">
          <vx-cell title="Badge" to="/demos/badge"></vx-cell>
          <vx-cell title="Accordion" to="/demos/accordion"></vx-cell>
          <vx-cell title="Calendar" to="/demos/calendar"></vx-cell>
          <vx-cell title="CalendarRange" to="/demos/calendarrange"></vx-cell>
          <vx-cell title="Picker" to="/demos/picker"></vx-cell>
          <vx-cell title="CascaderPicker" to="/demos/cascaderpicker"></vx-cell>
          <vx-cell title="Ripple" to="/demos/ripple"></vx-cell>
          <vx-cell title="ListView" to="/demos/listview"></vx-cell>
          <vx-cell title="Sticky" to="/demos/sticky"></vx-cell>
          <vx-cell title="Swipeout" to="/demos/swipeout"></vx-cell>
          <vx-cell title="Spinner" to="/demos/spinner"></vx-cell>
          <vx-cell title="IndexList" to="/demos/indexlist"></vx-cell>
        </vx-group>
      </vx-page-body>
    </vx-page>
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
