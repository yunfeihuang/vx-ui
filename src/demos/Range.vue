<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Range</div>
    </x-nav>
    <x-body slot="body">
      <group>
        <divider></divider>
        <div class="range-demos">
          <label>0-100（value：{{value1}}）</label>
          <range v-model="value1" />
        </div>
        <divider></divider>
        <div class="range-demos">
          <label>10-100（value：{{value2}}）</label>
          <range :min="10" v-model="value2" />
        </div>
        <divider></divider>
        <div class="range-demos">
          <label>0-10（value：{{value3}}）</label>
          <range :max="10" v-model="value3" />
        </div>
      </group>
    </x-body>
  </layout>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 10,
      value3: 0
    }
  }
}
</script>

<style lang="scss">
  .range-demos{
    padding:10px;
    margin:10px 0;
    >label{
      color:#999;
    }
  }
</style>
