<template>
  <div class="base-item">
    <div class="flexbox">
      <div class="base-item-photo">
        <slot name="img"></slot>
      </div>
      <div class="flexitem">
        <slot name="content"></slot>
      </div>
    </div>
    <divider></divider>
  </div>
</template>

<script>
import {
  Divider
} from 'components'

export default {
  components: {
    Divider
  }
}
</script>

<style lang="scss">
  .base-item{
    overflow:hidden;
    .flexbox{
      padding:5px;
      color: inherit;
      align-items: center;
      display:flex;
    }
    .flexitem{
      overflow: hidden;
      flex:1;
    }
    h4{
      margin:0 0 5px 0;
      font-weight: normal;
    }
    &-photo{
      margin-right:10px;
      .v-img-wrapper{
        width:3rem;
        height:3rem;
      }
    }
    .weak{
      color:#999;
      font-size:0.8rem;
    }
    a{
      color:inherit!important;
      display:block;
    }
  }
</style>
