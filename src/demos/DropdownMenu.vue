<template>
  <page>
    <div slot="header">
      <x-nav title="DropdownMenu"></x-nav>
      <dropdown-menu>
        <dropdown-menu-item
          :options="options"
          v-model="value">
        </dropdown-menu-item>
        <dropdown-menu-item
          label="销量"
          :checked="type=='销量'"
          @click.native="type='销量'">
        </dropdown-menu-item>
        <dropdown-menu-item
          label="新品"
          :checked="type=='新品'"
          @click.native="type='新品'">
        </dropdown-menu-item>
        <dropdown-menu-item ref="custom" popup-class="custom-class" label="自定义">
          <div>
            <div style="padding:0.4rem;text-align:center">自定义弹框</div>
            <submit-bar>
              <x-button slot="button" @click.native="handleClose">取消</x-button>
              <x-button slot="button" type="primary" @click.native="handleClose">确定</x-button>
            </submit-bar>
          </div>
        </dropdown-menu-item>
      </dropdown-menu>
    </div>
    <x-body slot="body" :scroll="false">
    </x-body>
  </page>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {value: 'recommed', label: '推荐'},
        {value: 'it', label: '科技'},
        {value: 'active', label: '活动'},
        {value: 'find', label: '发现'},
        {value: 'sort', label: '排行'},
        {value: 'msg', label: '消息'},
        {value: 'sns', label: '社区'}
      ],
      value: 'recommed',
      type: ''
    }
  },
  methods: {
    handleClose () {
      this.$refs.custom.close()
    }
  }
}
</script>

<style lang="scss">

</style>
