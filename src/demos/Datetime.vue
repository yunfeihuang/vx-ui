<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Datetime</div>
    </x-nav>
    <x-body slot="body">
      <br />
      <x-form @on-submit="submitHandler">
        <form-item label="yyyy-MM-dd">
          <x-input>
            <datetime :get-popup-mounted="popupMounted" v-model="date" placeholder="请输入日期" required/>
          </x-input>
        </form-item>
        <form-item label="yyyy-MM-dd HH:mm:ss">
          <x-input>
            <datetime format="yyyy-MM-dd HH:mm:ss" v-model="datetime" placeholder="请输入日期时间" required/>
          </x-input>
        </form-item>
        <form-item label="HH:mm:ss">
          <x-input>
            <datetime format="HH:mm:ss" v-model="time" placeholder="请输入时间" required/>
          </x-input>
        </form-item>
        <form-item label="yyyy-MM">
          <x-input>
            <datetime v-model="date2" format="yyyy-MM" placeholder="请输入年月" required/>
          </x-input>
        </form-item>
        <form-item label="yyyy">
          <x-input>
            <datetime v-model="date3" format="yyyy" placeholder="请输入年份" required/>
          </x-input>
        </form-item>
      </x-form>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XNav,
  XForm,
  FormItem,
  XInput,
  Divider,
  XSelect,
  XSwitch,
  Datetime,
  XButton
} from 'components'
export default {
  components: {
    Layout,
    XNav,
    XForm,
    FormItem,
    XInput,
    Divider,
    XSelect,
    XSwitch,
    Datetime,
    XButton
  },
  methods: {
    submitHandler () {
      window.$toast({
        type: 'loading',
        content: '数据中...',
        onClose: () => {
          window.$toast({
            type: 'success',
            content: '数据提交成功！'
          })
        }
      })
    },
    popupMounted (e) {
      console.log(e)
      return document.body
    }
  },
  data () {
    return {
      date: undefined,
      date2: undefined,
      date3: undefined,
      datetime: undefined,
      time: undefined
    }
  }
}
</script>

<style lang="scss">

</style>
