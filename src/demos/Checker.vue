<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Checker"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group title="Checker 多选">
        <div style="padding:20px 10px">
          <vx-checker-group v-model="checkboxValue">
            <vx-checker
              v-for="item in options.slice(0, more ? 2 : options.length)"
              :value="item.value"
              :disabled="item.disabled"
              :key="item.value"
              >
              {{item.label}}
            </vx-checker><vx-checker fake @click="more=!more">{{more ? '更多↓' : '收起 ↑'}}</vx-checker>
          </vx-checker-group>
          <br />
          value：{{checkboxValue}}
        </div>
      </vx-group>
      <vx-group title="Checker 最多选2个">
        <div style="padding:20px 10px">
          <vx-checker-group :max="2" v-model="checkboxValue" icon :inline="false">
            <vx-checker
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :key="item.value"
              >
              {{item.label}}
            </vx-checker>
          </vx-checker-group>
          <br />
          value：{{checkboxValue}}
        </div>
      </vx-group>
      <vx-group title="Checker 单选">
        <div style="padding:20px 10px">
          <vx-checker-group :max="1" v-model="radioValue">
            <vx-checker
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :key="item.value"
              >
              {{item.label}}
            </vx-checker>
          </vx-checker-group>
          <br />
          value：{{radioValue}}
        </div>
      </vx-group>
      <vx-group title="Checker 不限选项">
        <div style="padding:20px 10px">
          <vx-checker-group v-model="checkboxValue">
            <vx-checker exclusive>不限</vx-checker>
            <vx-checker
              v-for="item in options"
              :value="item.value"
              :disabled="item.disabled"
              :key="item.value"
              >
              {{item.label}}
            </vx-checker>
          </vx-checker-group>
          <br />
          value：{{checkboxValue}}
        </div>
      </vx-group>
      <vx-group title="自定义checker样式">
        <div style="padding:0.2rem">
          <vx-checker-group :max="1" v-model="checkboxValue">
            <vx-checker
               v-for="item in options"
              :disabled="item.disabled"
              :value="item.value"
              :key="item.value"
              >
              <template v-slot:custom="scope">
                <span :style="`color:${scope.checked?'red':''}`">
                  {{item.label}}
                </span>
              </template>
            </vx-checker>
          </vx-checker-group>
          value：{{checkboxValue}}
        </div>
      </vx-group>
    </vx-page-body>
  </vx-page>
</template>

<script>
export default {
  data () {
    return {
      checkboxValue: [1],
      radioValue: 1,
      more: true,
      options: [
        {
          value: 1,
          label: '篮球'
        },
        {
          value: 2,
          label: '羽毛球'
        },
        {
          value: 3,
          label: '乒乓球',
          disabled: true
        },
        {
          value: 4,
          label: '高尔夫'
        }
      ]
    }
  }
}
</script>
