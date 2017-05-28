<template>
  <popup :open="open">
    <div :class="classes">
      <div :class="[cssPrefix + 'popup-picker-header']">
        <button type="button" :class="[cssPrefix + 'popup-picker-cancel']" @click="cancelHandler">{{cancelText}}</button>
        <div :class="[cssPrefix + 'popup-picker-title']"></div>
        <button type="button" :class="[cssPrefix + 'popup-picker-confirm']" @click="confirmHandler">{{confirmText}}</button>
      </div>
      <divider></divider>
      <div :class="[cssPrefix + 'popup-picker']" @touchstart="touchStartHandler">
        <picker
          v-if="open && myPickers"
          v-for="(item,index) in myPickers"
          :class="[cssPrefix + 'popup-picker-item']"
          :data-index="index"
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
    pickers: {
      type: Array
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
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
      this.$emit('on-cancel')
    },
    confirmHandler () {
      let value = []
      for (let item of this.myPickers) {
        value.push({
          value: item.value
        })
      }
      this.$emit('on-confirm', value)
    },
    changeHandler (value) {
      this.myPickers[this.pickerIndex].value = value
      this.$emit('on-change', value, this.pickerIndex)
    },
    touchStartHandler (e) {
      this.pickerIndex = parseInt(e.target.closest('.' + cssPrefix + 'popup-picker-item').dataset.index)
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
      }
      &-header{
        display:flex;
      }
      &-title{
        flex:1;
      }
      &-cancel,&-confirm{
        @include button;
        height: 2.6rem;
        width: 5rem;
      }
    }
  }
</style>
