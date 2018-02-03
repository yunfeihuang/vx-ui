<template>
  <aside>
    <div v-for="(item,index) in navConfig">
      <template v-if="item.children">
        <h4>{{item.title}}</h4>
        <router-link v-for="(childItem,childIndex) in item.children" class="nav-link" :to="childItem.path" :key="childIndex">{{childItem.title}}</router-link>
      </template>
      <router-link style="font-weight:bold;" v-else class="nav-link" :to="item.path" >{{item.title}}</router-link>
    </div>
  </aside>
</template>

<script>
import navConfig from '../nav.config'
export default {
  data () {
    return {
      navConfig
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  aside{
    line-height:1;
    h4{
      margin-top:15px;
      margin-bottom:2px;
      font-size:12px;
      // color:$color-sub;
      font-weight: normal;
      opacity: 0.8;
    }
    a{
      display:block;
      color:#666;
      padding:10px 0;
      &:hover{
        color:$color-primary;
      }
      &:active{
        background:transparent;
        color:$color-primary;
      }
      &.router-link-exact-active{
        color:$color-primary;
        font-weight: bold;
      }
    }
  }
</style>
