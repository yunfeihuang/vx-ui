<template>
  <vx-page type="primary">
    <template v-slot:header>
      <vx-nav title="Heading"></vx-nav>
    </template>
    <vx-page-body>
      <vx-heading>
        <template>heading</template>
        <template v-slot:append>更多</template>
      </vx-heading>
      <vx-heading type="primary">
        <template>heading</template>
        <template v-slot:append>更多</template>
      </vx-heading>
      <vx-heading type="simple">
        heading
      </vx-heading>
      <vx-heading type="line">
        heading line
      </vx-heading>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
}
</script>
