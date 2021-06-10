<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="DropdownMenu"></vx-nav>
      <dropdown-menu>
        <dropdown-menu-item
          :options="options"
          v-model="value">
        </dropdown-menu-item>
        <dropdown-menu-item
          label="销量"
          :checked="type=='销量'"
          @click="type='销量'">
        </dropdown-menu-item>
        <dropdown-menu-item
          label="新品"
          :checked="type=='新品'"
          @click="type='新品'">
        </dropdown-menu-item>
        <dropdown-menu-item ref="custom" popup-class="custom-class" label="自定义">
          <div>
            <div style="padding:0.4rem;text-align:center">自定义弹框</div>
            <submit-bar>
              <template v-slot:button>
                <vx-button @click="handleClose">取消</vx-button>
                <vx-button type="primary" @click="handleClose">确定</vx-button>
              </template>
            </submit-bar>
          </div>
        </dropdown-menu-item>
      </dropdown-menu>
    </template>
    <vx-page-body  :scroll="false">
    </vx-page-body>
  </vx-page>
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
