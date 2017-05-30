<template>
  <layout>
    <x-header slot="header" :back="false">
      <div slot="title">Vue Components Demos</div>
    </x-header>
    <x-body class="demos" slot="body" style="background:#fff">
      <flexbox wrap="wrap" class="demos-actions">
        <x-link href="/button">XButton</x-link>
        <x-link href="/input">XInput</x-link>
        <x-link href="/input">Password</x-link>
        <x-link href="/textarea">XTextarea</x-link>
        <x-link href="/select">XSelect</x-link>
        <x-link href="/switch">XSwitch</x-link>
        <x-link href="/radio">Radio</x-link>
        <x-link href="/checkbox">Checkbox</x-link>
        <x-link href="/range">Range</x-link>
        <x-link href="/search">Search</x-link>
        <x-link href="/form">Form</x-link>
        <x-link href="/actionsheet">Actionsheet</x-link>
        <x-link href="/alert">Alert</x-link>
        <x-link href="/confirm">Confirm</x-link>
        <x-link href="/tab">Tab</x-link>
        <x-link href="/tabbutton">TabButton</x-link>
        <x-link href="/tabbar">Tabbar</x-link>
        <x-link href="/popup">Popup</x-link>
        <x-link href="/toast">Toast</x-link>
        <x-link href="/flow">Flow</x-link>
        <x-link href="/ripple">Ripple</x-link>
        <x-link href="/img">XImg</x-link>
        <x-link href="/header">XHeader</x-link>
        <x-link href="/divider">Divider</x-link>
        <x-link href="/swiper">Swiper</x-link>
        <x-link href="/preview">Preview</x-link>
        <x-link href="/picker">Picker</x-link>
        <x-link href="/popuppicker">PopupPicker</x-link>
        <x-link href="/datetimepicker">DatetimePicker</x-link>
        <x-link href="/spinner">Spinner</x-link>
        <x-link href="/flexbox">Flexbox</x-link>
        <x-link href="/badge">Badge</x-link>
      </flexbox>
    </x-body>
  </layout>
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
