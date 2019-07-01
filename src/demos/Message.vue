<template>
  <layout type="primary">
    <x-nav slot="header" back="/" title="Message"></x-nav>
    <x-body slot="body">
      <message>注意：此示例要在移动设备体验哦~</message>
      <br/>
      <message type="warning">注意：此示例要在移动设备体验哦~</message>
      <br/>
      <message type="success">注意：此示例要在移动设备体验哦~</message>
      <br>
      <message type="error">注意：此示例要在移动设备体验哦~</message>
    </x-body>
  </layout>
</template>
<script>
export default {
}
</script>
