<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Datetime"></vx-nav>
    </template>
    <vx-page-body>
      <vx-message type="warning">注意：此示例要在移动设备体验哦~</vx-message>
      <vx-group title="default">
        <vx-datetime v-model="date" placeholder="请输入年月日"/>
      </vx-group>
      <vx-group title="年月">
        <vx-datetime v-model="date2" format="yyyy-MM" placeholder="请输入年月" />
      </vx-group>
      <vx-group title="年份">
        <vx-datetime v-model="date3" format="yyyy" placeholder="请输入年份" />
      </vx-group>
      <vx-group title="时分秒">
        <vx-datetime format="HH:mm:ss" v-model="time" placeholder="请输入时间"/>
      </vx-group>
      <vx-group title="时分">
        <vx-datetime format="HH:mm" v-model="time2" placeholder="请输入时间"/>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      date: null,
      date2: null,
      date3: null,
      datetime: null,
      time: null,
      time2: null
    }
  }
}
</script>
