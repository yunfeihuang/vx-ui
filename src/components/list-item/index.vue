<template>
  <div :class="['vx-list-item', {'vx-divider': divider}, {'is-half-divider': halfDivider}]"
    v-bind="$attrs"
    @click="linkTo($parent, to)">
    <template v-if="$slots['prepend']">
      <div class="vx-list-item--prepend">
        <slot name="prepend"></slot>
      </div>
      <divider></divider>
    </template>
    <div
      :class="['vx-list-item--inner', {'is-align-center': !halfDivider,'is-arrow': !$slots['action'] && arrow, 'is-action': $slots['action']}]">
      <slot name="checkbox"></slot>
      <template v-if="halfDivider">
        <slot name="image" v-if="$slots['image']"></slot>
        <div v-else-if="image!==undefined">
          <vx-img :style="imageStyle" class="vx-list-item--image" :src="image"></vx-img>
        </div>
      </template>
      <template v-else>
        <slot name="image" v-if="$slots['image']"></slot>
        <vx-img :style="imageStyle" class="vx-list-item--image" v-else-if="image!==undefined" :src="image"/>
      </template>
      <div :class="['vx-list-item--content', {'vx-divider': halfDivider}]">
        <div v-if="halfDivider" class="vx-list-item--content-inner">
          <slot></slot>
        </div>
        <slot v-else></slot>
      </div>
      <div @click.stop class="vx-list-item--action" v-if="$slots['action']">
        <slot name="action"></slot>
      </div>
    </div>
    <template v-if="$slots['append']">
      <divider></divider>
      <div class="vx-list-item--append">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-if="$slots['append-action']">
      <divider></divider>
      <div @click.stop class="vx-list-item--append-action">
        <slot name="append-action"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VxListItem',
  props: {
    image: {
      type: String
    },
    arrow: {
      type: Boolean
    },
    imageStyle: {
      type: [String, Object]
    },
    divider: {
      type: Boolean
    },
    halfDivider: {
      type: Boolean
    },
    to: {
      type: [String, Object]
    }
  },
  methods: {
    linkTo (parent, value) {
      value && parent.$router.push(value)
    }
  }
}
</script>
