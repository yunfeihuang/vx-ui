<template>
  <popup :open="open" :history="history" @on-close="closeHandler">
    <div :class="classes">
      <div :class="[$cssPrefix + 'flexbox',$cssPrefix + 'popup-picker-header']">
        <button type="button" :class="[$cssPrefix + 'popup-picker-cancel']" @click="cancelHandler">{{cancelText}}</button>
        <button type="button" :class="[$cssPrefix + 'flexbox-item',$cssPrefix + 'popup-picker-placeholder']">{{placeholder}}</button>
        <button type="button" :class="[$cssPrefix + 'popup-picker-confirm']" @click="confirmHandler">{{confirmText}}</button>
      </div>
      <divider></divider>
      <div :class="[$cssPrefix + 'flexbox',$cssPrefix + 'popup-picker']">
        <picker
          v-if="open && myPickers"
          v-for="(item,index) in myPickers"
          :class="[$cssPrefix + 'flexbox-item',$cssPrefix + 'popup-picker-item']"
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
import Popup from '../popup'
import Picker from '../picker'
import Divider from '../divider'

export default {
  name: 'PopupPicker',
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
      return [this.$cssPrefix + 'popup-picker-wrapper']
    }
  },
  watch: {
    pickers (value) {
      this.myPickers = value
    }
  },
  data () {
    return {
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
