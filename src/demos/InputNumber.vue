<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="InputNumber"></vx-nav>
    </template>
    <vx-page-body>
      <group title="default">
        <cell title="value" :arrow="false">
          <template v-slot:value><input-number v-model="minValue" :min="1"/></template>
        </cell>
      </group>
      <group title="small">
        <cell title="value" :arrow="false">
          <template v-slot:value><input-number size="small" v-model="minValue" :min="1"/></template>
        </cell>
      </group>
      <group title="disabled">
        <cell title="value" :arrow="false">
          <template v-slot:value><input-number v-model="value" :step="0.01" disabled/></template>
        </cell>
      </group>
    </vx-page-body>
  </vx-page>
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
