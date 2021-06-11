<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Message"></vx-nav>
    </template>
    <vx-page-body>
      <vx-message>注意：此示例要在移动设备体验哦~</vx-message>
      <br/>
      <vx-message type="warning">注意：此示例要在移动设备体验哦~</vx-message>
      <br/>
      <vx-message type="success">注意：此示例要在移动设备体验哦~</vx-message>
      <br>
      <vx-message type="error">注意：此示例要在移动设备体验哦~</vx-message>
    </vx-page-body>
  </vx-page>
</template>
<script>
export default {
}
</script>
