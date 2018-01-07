<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Form</div>
    </x-nav>
    <x-body slot="body">
      <br />
      <x-form @on-submit="submitHandler" :validator="formValidator">
        <form-item>
          <span slot="label">姓名</span>
          <x-input v-model="form.name" :clear="false" required/>
        </form-item>
        <form-item>
          <span slot="label">邮箱</span>
          <x-input :clear="false" pattern="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$" v-model="form.email" required />
        </form-item>
        <form-item label="生日">
          <x-input>
            <datetime v-model="form.date" placeholder="请输入日期" required/>
          </x-input>
        </form-item>
        <form-item>
          <span slot="label">性别</span>
          <x-select
            v-model="form.sex"
            :options="sexOptions"
            placeholder="请选择"
            required
            />
        </form-item>
        <divider></divider>
        <form-item>
          <span slot="label">是否已婚</span>
          <x-switch v-model="form.accpet"/>
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
    formValidator () {
      console.log('formValidator')
    },
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
      form: {
        name: '',
        sex: '',
        type: '',
        email: '',
        accpet: true,
        date: undefined
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
