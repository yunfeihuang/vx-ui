<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Form"></vx-nav>
    </template>
    <vx-page-body>
      <el-form size="small" :model="form" ref="form" @submit.prevent="handleSubmit">
        <el-form-item label="姓名：" prop="name" :rules="[
          {required: true, message: '姓名不能为空'},
          {min: 2, message: '姓名不能小于2字符'}
          ]">
          <vx-input v-model="form.name" placeholder="请输入姓名"/>
        </el-form-item>
        <el-form-item block label="设置密码：" prop="password" :rules="[
          {required: true, message: '密码不能为空'},
          {min: 6, message: '密码不能小于6字符'}
          ]">
          <vx-password v-model="form.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-form-item label="金额：" prop="inputNumber" :rules="[
          {min: 10, type: 'number', message: '金额不能小于10'}
          ]">
          <vx-input-number v-model="form.inputNumber" placeholder="请输入金额"/>
        </el-form-item>
        <el-form-item label="手机号码：" prop="mobile" :rules="[
          {required: true, message: '手机号码不能为空'},
          {pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号码格式不正确'}
          ]">
          <vx-input v-model="form.mobile" placeholder="请输入手机号码"/>
        </el-form-item>
        <el-form-item label="邮箱地址：" prop="email" :rules="[
          {required: true, message: '邮箱地址不能为空'},
          {pattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/, message: '邮箱地址格式不正确'}
          ]">
          <vx-input v-model="form.email" placeholder="请输入邮箱地址"/>
        </el-form-item>
        <el-form-item label="兴趣爱好：" prop="hobby" :rules="[
          {required: true, message: '兴趣爱好不能为空'}
          ]">
          <vx-select v-model="form.hobby">
            <vx-option v-for="(item,index) in options" :value="item.value" :label="item.label" :key="index"></vx-option>
          </vx-select>
          <vx-divider/>
        </el-form-item>
         <el-form-item label="出生日期：" prop="datetime" :rules="[
          {required: true, message: '出生日期不能为空'}
          ]">
          <vx-datetime v-model="form.datetime"/>
        </el-form-item>
        <el-form-item label="日期区间：" prop="daterange" :rules="[
          {required: true, message: '日期区间不能为空'}
          ]">
          <vx-daterange v-model="form.daterange"/>
        </el-form-item>
        <el-form-item label="级联：" prop="cascader" :rules="[
          {required: true, message: '级联不能为空'}
          ]">
          <vx-cascader v-model="form.cascader" :options="options1"/>
          <vx-divider/>
        </el-form-item>
        <el-form-item label="人个介绍：" prop="textarea" :rules="[
          {required: true, message: '人个介绍不能为空'}
          ]">
          <vx-textarea v-model="form.textarea" placeholder="请输入消息内容" enter-number :maxlength="100"/>
        </el-form-item>
        <el-form-item label="自我评分：" prop="rater" :rules="[
          {required: true, message: '自我评分不能为空'}
          ]">
          <vx-rater v-model="form.rater"/>
        </el-form-item>
        <el-form-item label="年龄：" prop="range" :rules="[
          {required: true, message: '年龄不能为空'}
          ]">
          <div style="padding-right:0.26rem">
            <vx-range v-model="form.range"/>
          </div>
        </el-form-item>
        <el-form-item label="开启消息醒：">
          <vx-switch v-model="form.enable"/>
        </el-form-item>
        <el-form-item block label="兴趣1：" prop="checkboxHobby" :rules="[
          {required: true, message: '兴趣1不能为空'}
          ]">
          <vx-checkbox-group v-model="form.checkboxHobby">
            <vx-checkbox
              v-for="item in options"
              :disabled="item.disabled"
              :value="item.value"
              :key="item.value"
              >
              {{item.label}}
            </vx-checkbox>
          </vx-checkbox-group>
        </el-form-item>
        <el-form-item block label="兴趣2：" prop="radioHobby" :rules="[
          {required: true, message: '兴趣2不能为空'}
          ]">
          <vx-radio-group v-model="form.radioHobby">
            <vx-radio
              v-for="item in options"
              :disabled="item.disabled"
              :key="item.value"
              :value="item.value"
              >
                {{item.label}}
            </vx-radio>
          </vx-radio-group>
        </el-form-item>
        <div style="margin:20px 10px;">
          <vx-button type="primary" native-type="submit" size="large">保存</vx-button>
        </div>
      </el-form>
    </vx-page-body>
  </vx-page>
</template>

<script>
import ElForm from 'element-plus/lib/el-form'
import ElFormItem from 'element-plus/lib/el-form-item'
console.log('ElForm, ElFormItem', ElFormItem)
export default {
  components: {
    ElForm,
    ElFormItem,
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submit () {
      this.$toast({
        type: 'loading',
        message: '数据中...',
        onClose: () => {
          this.$toast({
            type: 'success',
            message: '数据提交成功！'
          })
        }
      })
    }
  },
  data () {
    return {
      form: {
        name: '',
        password: '',
        textarea: '',
        mobile: '',
        email: '',
        hobby: '',
        radioHobby: '',
        checkboxHobby: [],
        datetime: null,
        daterange: [],
        rater: null,
        range: 0,
        inputNumber: 0,
        cascader: [],
        enable: false
      },
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
          label: '乒乓球',
          disabled: true
        },
        {
          value: '4',
          label: '高尔夫'
        }
      ],
      options1: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }]
      },
      {
        value: 'other',
        label: '其他',
        disabled: true
      }]
    }
  }
}
</script>

<style lang="scss">

</style>
