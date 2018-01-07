<template>
  <layout>
    <x-nav slot="header">
      <div slot="title">Daterange</div>
    </x-nav>
    <x-body slot="body">
      <br />
      <x-form>
        <form-item label="yyyy-MM-dd">
          <x-input>
            <daterange v-model="date" placeholder="请选择截止时间" required/>
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
  Daterange,
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
    Daterange,
    XButton
  },
  data () {
    return {
      date: []
    }
  }
}
</script>

<style lang="scss">

</style>
