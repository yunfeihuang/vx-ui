<template>
  <div class="demos">
    <h1>demos</h1>
    <group title="表单">
      <cell href="#/button">
        <div slot="title">XButton</div>
      </cell>
      <cell href="#/input">
        <div slot="title">XInput</div>
      </cell>
      <cell href="#/textarea">
        <div slot="title">XTextarea</div>
      </cell>
      <cell href="#/select">
        <div slot="title">XSelect</div>
      </cell>
      <cell href="#/switch">
        <div slot="title">XSwitch</div>
      </cell>
      <cell href="#/radio">
        <div slot="title">Radio</div>
      </cell>
      <cell href="#/checkbox">
        <div slot="title">Checkbox</div>
      </cell>
    </group>
    <group title="弹框">
      <cell href="#/actionsheet">
        <div slot="title">Actionsheet</div>
      </cell>
      <cell href="#/alert">
        <div slot="title">Alert</div>
      </cell>
      <cell href="#/confirm">
        <div slot="title">Confirm</div>
      </cell>
      <cell href="#/tab">
        <div slot="title">Tab</div>
      </cell>
      <cell href="#/tabbutton">
        <div slot="title">TabButton</div>
      </cell>
      <cell href="#/popup">
        <div slot="title">Popup</div>
      </cell>
      <cell href="#/toast">
        <div slot="title">Toast</div>
      </cell>
    </group>
  </div>
</template>

<script>
import {
  Group,
  Divider,
  Cell
} from 'components'
export default {
  components: {
    Group,
    Divider,
    Cell
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
</style>
