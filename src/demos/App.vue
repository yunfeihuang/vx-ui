<template>
  <div>
    <layout>
      <x-header slot="header" :back="false">
        <div slot="title">Vue Components Demos</div>
      </x-header>
      <x-body class="demos" slot="body" style="background:#fff">
        <flexbox wrap="wrap" class="demos-actions">
          <x-link href="/demos/button">XButton</x-link>
          <x-link href="/demos/input">XInput</x-link>
          <x-link href="/demos/input">Password</x-link>
          <x-link href="/demos/textarea">XTextarea</x-link>
          <x-link href="/demos/select">XSelect</x-link>
          <x-link href="/demos/switch">XSwitch</x-link>
          <x-link href="/demos/radio">Radio</x-link>
          <x-link href="/demos/checkbox">Checkbox</x-link>
          <x-link href="/demos/checker">Checker</x-link>
          <x-link href="/demos/range">Range</x-link>
          <x-link href="/demos/datetime">Datetime</x-link>
          <x-link href="/demos/search">Search</x-link>
          <x-link href="/demos/form">Form</x-link>
          <x-link href="/demos/actionsheet">Actionsheet</x-link>
          <x-link href="/demos/alert">Alert</x-link>
          <x-link href="/demos/confirm">Confirm</x-link>
          <x-link href="/demos/prompt">Prompt</x-link>
          <x-link href="/demos/tab">Tab</x-link>
          <x-link href="/demos/tabbutton">TabButton</x-link>
          <x-link href="/demos/tabbar">Tabbar</x-link>
          <x-link href="/demos/sidebar">Sidebar</x-link>
          <x-link href="/demos/popup">Popup</x-link>
          <x-link href="/demos/toast">Toast</x-link>
          <x-link href="/demos/flow">Flow</x-link>
          <x-link href="/demos/ripple">Ripple</x-link>
          <x-link href="/demos/img">XImg</x-link>
          <x-link href="/demos/header">XHeader</x-link>
          <x-link href="/demos/divider">Divider</x-link>
          <x-link href="/demos/swiper">Swiper</x-link>
          <x-link href="/demos/swipeout">Swipeout</x-link>
          <x-link href="/demos/preview">Preview</x-link>
          <x-link href="/demos/picker">Picker</x-link>
          <x-link href="/demos/popuppicker">PopupPicker</x-link>
          <!--
          <x-link href="/demos/datetimepicker">DatetimePicker</x-link>
          -->
          <x-link href="/demos/spinner">Spinner</x-link>
          <x-link href="/demos/flexbox">Flexbox</x-link>
          <x-link href="/demos/badge">Badge</x-link>
          <x-link href="/demos/rater">Rater</x-link>
          <x-link href="/demos/marquee">Marquee</x-link>
          <x-link href="/demos/popover">Popover</x-link>
        </flexbox>
      </x-body>
    </layout>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Group,
  Divider,
  Cell,
  XLink,
  Flexbox,
  FlexboxItem
} from 'components'

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Group,
    Divider,
    Cell,
    XLink,
    Flexbox,
    FlexboxItem
  },
  mounted () {
    // console.log(this.$router.push)
  },
  methods: {
    tabbarChangeHandler (active) {
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
      line-height: 44px;
    }
  }
</style>
