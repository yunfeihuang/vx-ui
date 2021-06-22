<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Range"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group :title="`default(value:${value1})`">
        <div style="padding:10px">
          <vx-range v-model="value1"/>
        </div>
      </vx-group>
      <vx-group :title="`step:10(value:${value1})`">
        <div style="padding:10px">
          <vx-range v-model="value1" :step="10" barHeight="10px"/>
        </div>
      </vx-group>
      <vx-group :title="`min:10,max:50(value:${value2})`">
        <div style="padding:10px">
          <vx-range :min="10" :max="50" v-model="value2"/>
        </div>
      </vx-group>
      <vx-group title="disabled">
        <div style="padding:10px">
          <vx-range v-model="value1" disabled />
        </div>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: [10, 20]
    }
  }
}
</script>
