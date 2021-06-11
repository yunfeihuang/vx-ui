<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Switch"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <vx-cell :arrow="false">
          <template v-slot:title>开关（{{checked}}）</template>
          <template v-slot:value><vx-switch v-model="checked"/></template>
        </vx-cell>
      </vx-group>
      <vx-group title="small">
        <vx-cell :arrow="false">
          <template v-slot:title>开关（{{checked}}）</template>
          <template v-slot:value><vx-switch size="small" v-model="checked"/></template>
        </vx-cell>
      </vx-group>
      <vx-group title="offValue:0,onValue:1">
        <vx-cell :arrow="false">
          <template v-slot:title>开关（{{value}}）</template>
          <template v-slot:value><vx-switch v-model="value" on-value="1" off-value="0" /></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      value: '0'
    }
  }
}
</script>
