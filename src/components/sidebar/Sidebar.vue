<template>
  <div class="vx-sidebar" onselectstart="return false;">
    <div class="vx-sidebar--inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { tab } from '@/utils/mixins'
export default {
  name: 'VxSidebar',
  mixins: [tab]
}
</script>
