<template>
  <div class="base-item">
    <flexbox align="center">
      <div class="base-item-photo">
        <slot name="img"></slot>
      </div>
      <flexbox-item>
        <slot name="content"></slot>
      </flexbox-item>
    </flexbox>
    <divider></divider>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .base-item{
    overflow:hidden;
    .v-flexbox{
      padding:5px;
      color: inherit;
    }
    .v-flexbox-item{
      overflow: hidden;
    }
    h4{
      margin:0 0 5px 0;
      font-weight: normal;
    }
    &-photo{
      margin-right:10px;
      .v-img-wrapper{
        width:1rem;
        height:1rem;
        border-radius:3px;
      }
    }
    .weak{
      color:#999;
      font-size:0.8em;
    }
    a{
      color:inherit!important;
      display:block;
    }
  }
</style>
