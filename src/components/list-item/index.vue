<template functional>
  <div :class="['vx-list-item', {'is-divider': props.halfDivider || props.divider}, {'is-half-divider': props.halfDivider}, data.staticClass, data.class]"
    :style="data.staticStyle && data.style ? [data.staticStyle,data.style] : data.staticStyle || data.style"
    v-bind="data.attrs"
    v-on="listeners"
    @click="$options.methods.linkTo(parent, props.to)">
    <div class="vx-list-item--prepend" v-if="$slots['prepend']">
      <slot name="prepend"></slot>
    </div>
    <divider v-if="$slots['prepend']"></divider>
    <flexbox :align="!props.halfDivider ? 'center' : undefined"
      class="vx-list-item--inner"
      :class="{'is-arrow': !$slots['action'] && props.arrow, 'is-action': $slots['action']}">
      <slot name="image" v-if="$slots['image']"></slot>
      <x-img :style="props.imageStyle" class="vx-list-item--image" v-else-if="props.image!==undefined" :src="props.image"></x-img>
      <flexbox-item :class="['vx-list-item--content', {'vx-divider': props.halfDivider}]">
        <slot></slot>
      </flexbox-item>
      <div @click.stop class="vx-list-item--action" v-if="$slots['action']">
        <slot name="action"></slot>
      </div>
    </flexbox>
    <divider v-if="$slots['append']"></divider>
    <div class="vx-list-item--append" v-if="$slots['append']">
      <slot name="append"></slot>
    </div>
    <divider v-if="$slots['append-action']"></divider>
    <div @click.stop class="vx-list-item--append-action" v-if="$slots['append-action']">
      <slot name="append-action"></slot>
    </div>
    <divider v-if="props.divider"></divider>
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
