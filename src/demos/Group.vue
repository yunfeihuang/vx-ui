<template>
  <layout>
    <x-nav slot="header" back="/" title="Group"></x-nav>
    <x-body slot="body">
      <group title="default">
        <cell :arrow="false">
          <div slot="title">开关（{{checked}}）</div>
          <x-switch slot="value" v-model="checked" />
        </cell>
      </group>
      <group title="heading" heading-type="default">
        <a slot="heading-append" class="link">更多</a>
        <div>
          内容... <br />
          内容...
        </div>
        <div slot="prepend">prepend</div>
        <div slot="append">append</div>
      </group>
      <group title="heading primary" heading-type="primary">
        <a slot="heading-append" class="link">更多</a>
        <div>
          内容... <br />
          内容...
        </div>
      </group>
      <group title="heading primary" heading-type="primary">
        <a slot="heading-append" class="link">更多</a>
      </group>
    </x-body>
  </layout>
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
