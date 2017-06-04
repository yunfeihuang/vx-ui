<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Datetime</div>
    </x-header>
    <x-body slot="body">
      <br />
      <x-form @on-submit="submitHandler">
        <field label="yyyy-MM-dd">
          <x-input>
            <datetime v-model="date" placeholder="请输入日期" required/>
          </x-input>
        </field>
        <field label="yyyy-MM-dd HH:mm:ss">
          <x-input>
            <datetime format="yyyy-MM-dd HH:mm:ss" v-model="datetime" placeholder="请输入日期时间" required/>
          </x-input>
        </field>
        <field label="HH:mm:ss">
          <x-input>
            <datetime format="HH:mm:ss" v-model="time" placeholder="请输入时间" required/>
          </x-input>
        </field>
      </x-form>
    </x-body>
  </layout>
</template>

<script>
import {
  Layout,
  XHeader,
  XBody,
  XForm,
  FormItem,
  Field,
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
    XHeader,
    XBody,
    XForm,
    FormItem,
    Field,
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
    }
  },
  data () {
    return {
      date: undefined,
      datetime: undefined,
      time: undefined
    }
  }
}
</script>

<style lang="scss">

</style>
