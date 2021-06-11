<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="InputNumber"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <vx-cell title="value" :arrow="false">
          <template v-slot:value><vx-input-number v-model="minValue" :min="1"/></template>
        </vx-cell>
      </vx-group>
      <vx-group title="small">
        <vx-cell title="value" :arrow="false">
          <template v-slot:value><vx-input-number size="small" v-model="minValue" :min="1"/></template>
        </vx-cell>
      </vx-group>
      <vx-group title="disabled">
        <vx-cell title="value" :arrow="false">
          <template v-slot:value><vx-input-number v-model="value" :step="0.01" disabled/></template>
        </vx-cell>
      </vx-group>
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
