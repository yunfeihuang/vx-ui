<template>
  <page type="primary">
    <x-nav slot="header" title="Heading"></x-nav>
    <page-body slot="body">
      <heading>
        <template>heading</template>
        <a slot="append" class="link">更多</a>
      </heading>
      <heading type="primary">
        <template>heading</template>
        <a slot="append" class="link">更多</a>
      </heading>
      <heading type="simple">
        heading
      </heading>
      <heading type="line">
        heading line
      </heading>
    </page-body>
  </page>
</template>

<script>
export default {
}
</script>
