<template>
  <div>
    <h4>选项卡</h4>
    <group>fdsafdsafd</group>
    <tab :active="active" @on-change="tabChangeHandler">
      <tab-item>选项卡1</tab-item>
      <tab-item>选项卡2</tab-item>
      <tab-item>选项卡3</tab-item>
      <tab-item>选项卡4</tab-item>
    </tab>
    <h4>按钮选项卡</h4>
    <button-tab :active="active" @on-change="tabChangeHandler" style="margin:15px">
      <button-tab-item>button1</button-tab-item>
      <button-tab-item>button2</button-tab-item>
      <button-tab-item>button3</button-tab-item>
      <button-tab-item>button4</button-tab-item>
    </button-tab>
    <h4>输入框</h4>
    <section>
      <x-input placeholder="请输入帐号" :value="account" @on-change="inputChangeHandler" />
      <x-input placeholder="请输入密码" :value="account" htmlType="password" @on-change="inputChangeHandler" />
    </section>
    <h4>下拉框</h4>
    <section>
      <div>
        <x-select :options="options" placeholder="请选择兴趣爱好" @on-change="selectChangeHandler" :value="selectValue"/>
      </div>
    </section>
    <h4>开关项</h4>
    <section>
      <x-switch :checked="switchChecked" @on-change="switchChangeHandler"/>
    </section>
    <h4>复选框</h4>
    <section>
      <checkbox value="复选框">复选框</checkbox>
      <checkbox-group :options="options" @on-change="checkboxChangeHandler" :value="checkboxValue" />
    </section>
    <h4>单选框</h4>
    <section>
      <radio value="单选框">单选框</radio>
      <radio-group :options="options" @on-change="radioChangeHandler" name="radio" value="1"/>
    </section>
    <h4>按钮</h4>
    <section>
      <x-button @on-click="buttonClickHandler">default</x-button>
      <x-button type="primary">primary</x-button>
      <x-button type="dashed">dashed</x-button>
      <x-button type="warning">warning</x-button>
      <x-button type="primary" disabled>disabled</x-button>
    </section>
    <actionsheet :open="switchChecked" :cancel="true" @on-menu="menuHandler" @on-close="menuCloseHandler">
      <actionsheet-item value="1">编辑</actionsheet-item>
      <actionsheet-item value="2">收藏</actionsheet-item>
      <actionsheet-item value="3">分享</actionsheet-item>
      <actionsheet-item value="4">删除</actionsheet-item>
    </actionsheet>
    <confirm :open="confirmOpen" @on-cancel="confirmCancelHandler" @on-confirm="confirmHandler">删除用户信息</confirm>
    <alert :open="false">删除用户信息</alert>
  </div>
</template>

<script>
import {
  Tab,
  TabItem,
  ButtonTab,
  ButtonTabItem,
  XButton, XInput,
  XSwitch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Actionsheet,
  ActionSheetItem,
  XSelect,
  Confirm,
  Alert,
  Group
} from '../components'
export default {
  components: {
    Tab,
    TabItem,
    ButtonTab,
    ButtonTabItem,
    XButton,
    XInput,
    XSwitch,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    XSelect,
    Actionsheet,
    ActionsheetItem,
    Confirm,
    Alert,
    Group
  },
  methods: {
    tabChangeHandler (val) {
      this.active = val
    },
    buttonClickHandler () {
      console.log('click event')
      this.switchChecked = false
    },
    inputChangeHandler (value) {
      this.account = value
    },
    switchChangeHandler (value) {
      this.switchChecked = value
      // this.confirmOpen = true
    },
    checkboxChangeHandler (value) {
      this.checkboxValue = value
    },
    radioChangeHandler (value) {
      console.log(value)
    },
    menuHandler (value) {
      console.log(value)
    },
    menuCloseHandler () {
      this.switchChecked = false
    },
    selectChangeHandler (val) {
      this.selectValue = val
    },
    confirmHandler () {
      this.confirmOpen = false
      this.switchChecked = false
    },
    confirmCancelHandler () {
      this.confirmOpen = false
      this.switchChecked = false
    }
  },
  data () {
    return {
      active: 0,
      account: '',
      switchChecked: false,
      actionsheetShow: true,
      selectValue: '',
      checkboxValue: ['1'],
      options: [
        {
          value: '1',
          label: '篮球'
        },
        {
          value: '2',
          label: '羽毛球'
        },
        {
          value: '3',
          label: '乒乓球'
        },
        {
          value: '4',
          label: '高尔夫'
        }
      ],
      confirmOpen: false
    }
  }
}
</script>

<style lang="scss">
  section{
    padding:0 15px;
    >*{
      margin-top:15px;
    }
  }
  h4{
    margin-top:20px;
    margin-bottom:5px;
    font-size:1.05rem;
    font-weight:normal;
    padding:0px 15px;
  }
</style>
