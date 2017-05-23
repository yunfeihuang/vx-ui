<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Form</div>
    </x-header>
    <x-body slot="body">
      <br />
      <x-form>
        <form-item label="姓名">
          <input v-model="form.name" required />
        </form-item>
        <form-item label="邮箱">
          <input pattern="^[0-9]$" v-model="form.email" required />
        </form-item>
        <form-item label="性别">
          <x-select
            v-model="form.sex"
            :options="sexOptions"
            placeholder="请选择"
            required
            />
        </form-item>
        <form-item label="是否已婚" >
          <x-switch
            v-model="form.accpet"
          />
        </form-item>
        <br />
        <div style="padding:0px 10px;">
          <x-button type="primary" htmlType="submit">提交</x-button>
        </div>
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
  XInput,
  XSelect,
  XSwitch,
  XButton
} from 'components'
export default {
  components: {
    Layout,
    XHeader,
    XBody,
    XForm,
    FormItem,
    XInput,
    XSelect,
    XSwitch,
    XButton
  },
  data () {
    return {
      form: {
        name: '',
        sex: '',
        type: '',
        email: '',
        accpet: true
      },
      sexOptions: [
        {
          label: '男',
          value: '1',
          selected: true
        },
        {
          label: '女',
          value: '2'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
