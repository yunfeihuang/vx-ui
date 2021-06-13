<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Group"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="default">
        <vx-cell :arrow="false">
          <template v-slot:title>开关（{{checked}}）</template>
          <template v-slot:value><vx-switch v-model="checked" /></template>
        </vx-cell>
      </vx-group>
      <vx-group title="heading" heading-type="default" v-show="checked">
        <template v-slot:heading-append>更多</template>
        <div>
          内容... <br />
          内容...
        </div>
        <template v-slot:prepend>prepend</template>
        <template v-slot:append>append</template>
      </vx-group>
      <vx-group title="heading primary" heading-type="primary">
        <template v-slot:heading-append>更多</template>
        <div>
          内容... <br />
          内容...
        </div>
      </vx-group>
      <vx-group title="heading primary" heading-type="primary">
        <template v-slot:heading-append>更多</template>
      </vx-group>
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
