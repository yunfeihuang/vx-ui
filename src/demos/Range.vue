<template>
  <page>
    <x-nav slot="header" title="Range"></x-nav>
    <page-body slot="body">
      <group :title="`default(value:${value1})`">
        <div style="padding:10px">
          <range v-model="value1"/>
        </div>
      </group>
      <group :title="`step:10(value:${value1})`">
        <div style="padding:10px">
          <range v-model="value1" :step="10" />
        </div>
      </group>
      <group :title="`min:10,max:50(value:${value2})`">
        <div style="padding:10px">
          <range :min="10" :max="50" v-model="value2" />
        </div>
      </group>
      <group title="disabled">
        <div style="padding:10px">
          <range v-model="value1" disabled />
        </div>
      </group>
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 20
    }
  }
}
</script>
