<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Badge"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group>
        <vx-cell>
          <template v-slot:title>红点</template>
          <template v-slot:value>新消息<vx-badge class="badge"/></template>
        </vx-cell>
        <vx-cell>
          <template v-slot:title @click="handleClick">个位数红点(点击累加)</template>
          <template v-slot:value @click="handleClick">新消息 <vx-badge class="badge" :text="count"/></template>
        </vx-cell>
        <vx-cell>
          <template v-slot:title>超出最大值显示(ellipsis)红点</template>
          <template v-slot:value>新消息 <vx-badge class="badge" :text="Number(20)"/></template>
        </vx-cell>
        <vx-cell>
          <template v-slot:title>多位数红点</template>
          <template v-slot:value>新消息 <vx-badge class="badge" text="888"/></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.count++
    }
  },
  data () {
    return {
      count: 8
    }
  }
}
</script>

<style lang="scss">

</style>
