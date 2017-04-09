<template>
  <layout class="demos img-demos">
    <x-header slot="header">
      <div slot="title">XImg</div>
    </x-header>
    <x-body slot="body" class="scrollbox">
      <x-img src="http://assets.bittyos.com/images/gallery/img1.jpg"></x-img>
      <x-img src="http://assets.bittyos.com/images/gallery/img2.jpg"></x-img>
      <x-img src="http://assets.bittyos.com/images/gallery/img3.jpg"></x-img>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  XImg
} from '../components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XImg
  }
}
</script>

<style lang="scss">
  .img-demos img{
    display:block;
    width:100%;
    min-height:500px;
  }
</style>
