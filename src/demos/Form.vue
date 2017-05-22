<template>
  <layout>
    <x-header slot="header">
      <div slot="title">Form</div>
    </x-header>
    <x-body slot="body">
      <br />
      <x-form>
        <form-item label="姓名">
          <input name="name" required @change="changeHandler"/>
        </form-item>
        <form-item label="邮箱">
          <input name="email" required @change="changeHandler"/>
        </form-item>
        <form-item label="性别">
          <x-select
            name="sex"
            :value="formStore.sex"
            :options="sexOptions"
            placeholder="请选择"
            required
            @on-change="changeHandler"
            />
        </form-item>
        <form-item label="是否已婚" >
          <x-switch
            name="accpet"
            :checked="formStore.accpet"
            @on-change="changeHandler"
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
  methods: {
    changeHandler (value, name) {
      if (value.target) {
        this.formStore[value.target.name] = value.target.value
      } else {
        this.formStore[name] = value
      }
      console.log(this.formStore)
    }
  },
  data () {
    return {
      formStore: {
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
