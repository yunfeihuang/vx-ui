<template>
  <div class="demos img-demos">
    <h1>XImg</h1>
    <x-img src="http://assets.bittyos.com/images/gallery/img1.jpg"></x-img>
    <x-img src="http://assets.bittyos.com/images/gallery/img2.jpg"></x-img>
    <x-img src="http://assets.bittyos.com/images/gallery/img3.jpg"></x-img>
  </div>
</template>

<script>
import {
  XImg
} from '../components'
export default {
  components: {
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
