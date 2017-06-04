<template>
  <div :class="classes" :disabled="disabled">
    <label :class="cssPrefix + 'checker-item'" v-for="item in options">
      <input
        :type="type"
        :value="item.value"
        :checked="type === 'checkbox' ? value.indexOf(item.value) > -1 : value === item.value"
        :disabled="item.disabled"
        :name="name"
        @change="changeHandler"
        />
      <span :disabled="item.disabled">{{item.label}}</span>
    </label>
  </div>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import { input } from 'utils/mixins.js'

export default {
  mixins: [input],
  props: {
    options: {
      type: Array,
      default: []
    },
    value: {
      type: [Array, String],
      default: []
    },
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'checker']
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix
    }
  },
  methods: {
    changeHandler (e) {
      if (this.type === 'checkbox') {
        let value = Object.assign([], this.value)
        if (e.target.checked) {
          value.indexOf(e.target.value) === -1 && value.push(e.target.value)
        } else {
          value.splice(value.indexOf(e.target.value), 1)
        }
        this.$emit('on-change', value)
        this.$emit('input', value)
      } else {
        this.$emit('on-change', e.target.value)
        this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &checker{
      user-select: none;
      @include disabled;
      line-height:40px;
      &-item{
        display:inline-block;
        vertical-align: middle;
        position:relative;
        margin-right:5px;
        margin-bottom:5px;
        input{
          opacity:0;
          width:100%;
          height:100%;
          position:absolute;
          top:0;
          left:0;
          margin: 0;
          &:checked+span{
            border-color:$primary-color;
            color:$primary-color;
            &:before{
              border-color:$primary-color;
            }
          }
        }
        span{
          display:inline-block;
          vertical-align: middle;
          @include round-border($border-color-base,0);
          min-width:50px;
          padding:0 0.5rem;
          text-align:center;
          overflow:hidden;
          @include disabled;
        }
      }
    }
  }
</style>
