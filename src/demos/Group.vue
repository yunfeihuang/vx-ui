<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Group"></vx-nav>
    </template>
    <vx-page-body>
      <group title="default">
        <cell :arrow="false">
          <template v-slot:title>开关（{{checked}}）</template>
          <template v-slot:value><vx-switch v-model="checked" /></template>
        </cell>
      </group>
      <group title="heading" heading-type="default">
        <template v-slot:heading-append>更多</template>
        <div>
          内容... <br />
          内容...
        </div>
        <template v-slot:prepend>prepend</template>
        <template v-slot:append>append</template>
      </group>
      <group title="heading primary" heading-type="primary">
        <template v-slot:heading-append>更多</template>
        <div>
          内容... <br />
          内容...
        </div>
      </group>
      <group title="heading primary" heading-type="primary">
        <template v-slot:heading-append>更多</template>
      </group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
