<template>
  <div>
    <layout>
      <x-nav slot="header" :back="false">
        <div slot="title">Demos</div>
      </x-nav>
      <x-body class="demos" slot="body" style="background:#fff">
        <flexbox wrap="wrap" class="demos-actions">
          <router-link to="/demos/button">XButton</router-link>
          <router-link to="/demos/input">Input</router-link>
          <router-link to="/demos/password">Password</router-link>
          <router-link to="/demos/textarea">XTextarea</router-link>
          <router-link to="/demos/select">XSelect</router-link>
          <router-link to="/demos/switch">XSwitch</router-link>
          <router-link to="/demos/radio">Radio</router-link>
          <router-link to="/demos/checkbox">Checkbox</router-link>
          <router-link to="/demos/checker">Checker</router-link>
          <router-link to="/demos/range">Range</router-link>
          <router-link to="/demos/datetime">Datetime</router-link>
          <router-link to="/demos/daterange">Daterange</router-link>
          <router-link to="/demos/search">Search</router-link>
          <router-link to="/demos/form">Form</router-link>
          <router-link to="/demos/actionsheet">Actionsheet</router-link>
          <router-link to="/demos/alert">Alert</router-link>
          <router-link to="/demos/confirm">Confirm</router-link>
          <router-link to="/demos/prompt">Prompt</router-link>
          <router-link to="/demos/tab">Tab</router-link>
          <router-link to="/demos/buttontab">ButtonTab</router-link>
          <router-link to="/demos/tabbar">Tabbar</router-link>
          <router-link to="/demos/sidebar">Sidebar</router-link>
          <router-link to="/demos/popup">Popup</router-link>
          <router-link to="/demos/toast">Toast</router-link>
          <router-link to="/demos/listview">ListView</router-link>
          <router-link to="/demos/ripple">Ripple</router-link>
          <router-link to="/demos/img">XImg</router-link>
          <router-link to="/demos/nav">XNav</router-link>
          <router-link to="/demos/divider">Divider</router-link>
          <router-link to="/demos/carousel">Carousel</router-link>
          <router-link to="/demos/swiper">Swiper</router-link>
          <router-link to="/demos/swipeout">Swipeout</router-link>
          <router-link to="/demos/preview">Preview</router-link>
          <router-link to="/demos/picker">Picker</router-link>
          <router-link to="/demos/popuppicker">PopupPicker</router-link>
          <!--
          <router-link to="/demos/datetimepicker">DatetimePicker</router-link>
          -->
          <router-link to="/demos/spinner">Spinner</router-link>
          <router-link to="/demos/flexbox">Flexbox</router-link>
          <router-link to="/demos/badge">Badge</router-link>
          <router-link to="/demos/rater">Rater</router-link>
          <router-link to="/demos/marquee">Marquee</router-link>
          <router-link to="/demos/popover">Popover</router-link>
          <router-link to="/demos/qrcode">QrCode</router-link>
        </flexbox>
      </x-body>
    </layout>
    <router-view></router-view>
  </div>
</template>

<script>
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
  .demos{
    h1{
      text-align:center;
      margin: 0;
      padding: 1rem 0;
    }
  }
  .demos-actions{
    text-align:center;
    a{
      display:block;
      width:33.33%;
      line-height: 0.9rem;
    }
  }
</style>
