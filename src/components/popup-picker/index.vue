<template>
  <popup :open="open" :history="history" @on-close="closeHandler">
    <div :class="classes">
      <div :class="['flexbox',cssPrefix + 'popup-picker-header']">
        <button type="button" :class="[cssPrefix + 'popup-picker-cancel']" @click="cancelHandler">{{cancelText}}</button>
        <button type="button" :class="['flexbox-item',cssPrefix + 'popup-picker-placeholder']">{{placeholder}}</button>
        <button type="button" :class="[cssPrefix + 'popup-picker-confirm']" @click="confirmHandler">{{confirmText}}</button>
      </div>
      <divider></divider>
      <div :class="['flexbox',cssPrefix + 'popup-picker']">
        <picker
          v-if="open && myPickers"
          v-for="(item,index) in myPickers"
          :class="['flexbox-item',cssPrefix + 'popup-picker-item']"
          :index="index"
          :key="index"
          :value="item.value"
          :placeholder="item.placeholder"
          :options="item.options"
          @on-change="changeHandler"
        />
      </div>
    </div>
  </popup>
</template>

<script>
import { cssPrefix } from 'utils/variable.js'
import Popup from '../popup'
import Picker from '../picker'
import Divider from '../divider'

export default {
  components: {
    Popup,
    Picker,
    Divider
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: true
    },
    pickers: {
      type: Array
    },
    placeholder: {
      type: String
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '完成'
    }
  },
  computed: {
    classes () {
      return [cssPrefix + 'popup-picker-wrapper']
    }
  },
  watch: {
    pickers (value) {
      this.myPickers = value
    }
  },
  data () {
    return {
      cssPrefix: cssPrefix,
      myPickers: this.pickers
    }
  },
  methods: {
    cancelHandler () {
      this.$emit('on-close')
    },
    closeHandler () {
      this.$emit('on-close')
    },
    confirmHandler () {
      let value = []
      for (let item of this.myPickers) {
        value.push({
          value: item.value
        })
      }
      if (!this.value || value.toString() !== this.value.toString()) {
        this.open && this.$emit('on-change', value).$emit('input', value)
      } else {
        this.closeHandler()
      }
    },
    changeHandler (value, index) {
      this.myPickers[index].value = value
      this.$emit('on-pickerchange', value, index)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/variable.scss';
  @import '~styles/mixins.scss';
  .#{$css-prefix}{
    &popup-picker{
      display:flex;
      &-wrapper{
        background:#fff;
      }
      &-item{
        flex:1;
        min-width:0;
      }
      &-header{
        display:flex;
      }
      &-placeholder{
        flex:1;
        line-height: 0.9rem;
        color:#999;
        min-width:0;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        @include button;
      }
      &-cancel,&-confirm{
        @include button;
        height: 0.9rem;
        width: 2rem;
        color:$sub-color;
      }
      &-confirm{
        color:$primary-color;
      }
    }
  }
</style>
