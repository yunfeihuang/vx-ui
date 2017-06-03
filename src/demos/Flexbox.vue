<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Flexbox</div>
    </x-header>
    <x-body slot="body" class="flexbox-demos">
      <flexbox>
        <flexbox-item>
          1
        </flexbox-item>
        <flexbox-item>
          2
        </flexbox-item>
        <flexbox-item>
          3
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          1
        </flexbox-item>
        <flexbox-item :span="2">
          2
        </flexbox-item>
        <flexbox-item :span="3">
          3
        </flexbox-item>
      </flexbox>
      <flexbox direction="column">
        <flexbox-item>
          1
        </flexbox-item>
        <flexbox-item>
          2
        </flexbox-item>
        <flexbox-item>
          3
        </flexbox-item>
      </flexbox>
      <flexbox wrap="wrap" align="center" justify="center">
        <div class="wrap-item">1</div>
        <div class="wrap-item">2</div>
        <div class="wrap-item">3</div>
        <div class="wrap-item">4</div>
        <div class="wrap-item">5</div>
        <div class="wrap-item">6</div>
        <div class="wrap-item">7</div>
        <div class="wrap-item">8</div>
        <div class="wrap-item">9</div>
        <div class="wrap-item">10</div>
        <div class="wrap-item">11</div>
        <div class="wrap-item">12</div>
      </flexbox>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  Flexbox,
  FlexboxItem
} from '../components'

export default {
  components: {
    Layout,
    XHeader,
    XBody,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="scss">
  .flexbox-demos{
    .flexbox{
      margin:15px 0;
    }
    .flexbox-item,.wrap-item{
      background:#3399ff;
      border-radius:6px;
      text-align:center;
      color:#fff;
      font-size:1.1rem;
      line-height:30px;
      margin:3px;
    }
    .wrap-item{
      width:100px;
    }
  }
</style>
