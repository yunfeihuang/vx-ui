<template>
  <div class="vx-dropdown-menu">
    <flexbox class="vx-dropdown-menu--inner" :gutter="0">
      <slot></slot>
    </flexbox>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  componentName: 'DropdownMenu'
}
</script>
