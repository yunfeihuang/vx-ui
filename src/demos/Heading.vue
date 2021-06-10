<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Heading"></vx-nav>
    </template>
    <vx-page-body>
      <heading>
        <template>heading</template>
        <template v-slot:append>更多</template>
      </heading>
      <heading type="primary">
        <template>heading</template>
        <template v-slot:append>更多</template>
      </heading>
      <heading type="simple">
        heading
      </heading>
      <heading type="line">
        heading line
      </heading>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
}
</script>
