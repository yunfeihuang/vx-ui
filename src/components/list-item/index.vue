<template>
  <div :class="['vx-list-item', {'vx-divider': props.divider}, {'is-half-divider': props.halfDivider}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners"
    @click="$options.methods.linkTo(parent, props.to)">
    <template v-if="$slots['prepend']">
      <div class="vx-list-item--prepend">
        <slot name="prepend"></slot>
      </div>
      <divider></divider>
    </template>
    <div
      :class="['vx-list-item--inner', {'is-align-center': !props.halfDivider,'is-arrow': !$slots['action'] && props.arrow, 'is-action': $slots['action']}]">
      <slot name="checkbox"></slot>
      <template v-if="props.halfDivider">
        <slot name="image" v-if="$slots['image']"></slot>
        <div v-else-if="props.image!==undefined">
          <x-img :style="props.imageStyle" class="vx-list-item--image" :src="props.image"></x-img>
        </div>
      </template>
      <template v-else>
        <slot name="image" v-if="$slots['image']"></slot>
        <x-img :style="props.imageStyle" class="vx-list-item--image" v-else-if="props.image!==undefined" :src="props.image"></x-img>
      </template>
      <div :class="['vx-list-item--content', {'vx-divider': props.halfDivider}]">
        <div v-if="props.halfDivider" class="vx-list-item--content-inner">
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
  name: 'ListItem',
  componentName: 'ListItem',
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
