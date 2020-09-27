<template>
  <page>
    <x-nav slot="header" title="InputNumber"></x-nav>
    <page-body slot="body">
      <group title="default">
        <cell title="value" :arrow="false">
          <input-number slot="value" v-model="minValue" :min="1"/>
        </cell>
      </group>
      <group title="small">
        <cell title="value" :arrow="false">
          <input-number size="small" slot="value" v-model="minValue" :min="1"/>
        </cell>
      </group>
      <group title="自定义">
        <cell title="value" :arrow="false">
          <input-number slot="value" size="none" v-model="minValue" :min="1">
            <template v-slot:value="scope">
              <span style="padding:0 10px">{{scope.value}}</span>
            </template>
            <span slot="reduce">reduce</span>
            <span slot="add">add</span>
          </input-number>
        </cell>
      </group>
      <group title="disabled">
        <cell title="value" :arrow="false">
          <input-number slot="value" v-model="value" :step="0.01" disabled/>
        </cell>
      </group>
    </page-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      minValue: 1
    }
  }
}
</script>
