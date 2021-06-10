<template>
  <page>
    <x-nav slot="header" title="Theme"></x-nav>
    <page-body slot="body" class="theme">
      <group title="颜色">
        <cell :arrow="false" title="字体色">
          <color-picker slot="value" v-model="variable['color-black']"/>
        </cell>
        <cell :arrow="false" title="字体辅助色">
          <color-picker slot="value" v-model="variable['color-assist']"/>
          <div slot="value"></div>
        </cell>
        <cell :arrow="false" title="字体辅助淡色">
          <color-picker slot="value" v-model="variable['color-light']"/>
          <div slot="value"></div>
        </cell>
        <cell :arrow="false" title="边框色">
          <color-picker slot="value" v-model="variable['color-border']"/>
          <div slot="value"></div>
        </cell>
        <cell :arrow="false" title="分割线色">
          <color-picker slot="value" v-model="variable['color-divider']"/>
          <div slot="value"></div>
        </cell>
        <cell :arrow="false" title="背景色">
          <color-picker slot="value" v-model="variable['color-background']"/>
          <div slot="value"></div>
        </cell>
        <cell :arrow="false" title="active伪类背景色">
          <color-picker slot="value" v-model="variable['color-touch-active']"/>
          <div slot="value"></div>
        </cell>
        <cell :arrow="false" title="主题色">
          <color-picker slot="value" v-model="variable['color-primary']"/>
        </cell>
        <cell :arrow="false" title="警告色">
          <color-picker slot="value" v-model="variable['color-warning']"/>
        </cell>
        <cell :arrow="false" title="危险色">
          <color-picker slot="value" v-model="variable['color-danger']"/>
        </cell>
        <cell :arrow="false" title="错误色">
          <color-picker slot="value" v-model="variable['color-error']"/>
        </cell>
      </group>
      <group title="尺寸大小">
        <cell :arrow="false" title="字体">
          <range v-model="variable['font-size-default']" :step="0.01" :min="0.2" :max="0.4" slot="value"/>
        </cell>
        <cell :arrow="false" title="边框圆角">
          <range v-model="variable['border-radius']" :step="0.01" :min="0" :max="1" slot="value"/>
        </cell>
        <!--
        <cell :arrow="false" title="控件高度">
          <range v-model="variable['box-size-height-default']" :step="0.01" :min="0.5" :max="1.8" slot="value"/>
        </cell>
        -->
      </group>
      <group title="主题相关的类">
        <div style="padding:0.2rem;line-height:1.4">
          <div v-for="(item,index) in themeClasses" :key="index">
            {{item}}
          </div>
        </div>
      </group>
      <group v-if="variableHTML" title="生成的css variables代码">
        <pre v-html="variableHTML"></pre>
      </group>
    </page-body>
  </page>
</template>

<script>
import variable from '@/components/style/src/theme/common/variable.scss'
variable['font-size-default'] = Number(variable['font-size-default'].replace('rem', ''))
variable['font-size-small'] = Number(variable['font-size-small'].replace('rem', ''))
variable['font-size-large'] = Number(variable['font-size-large'].replace('rem', ''))
variable['font-size-xl'] = Number(variable['font-size-xl'].replace('rem', ''))
variable['border-radius'] = Number(variable['border-radius'].replace('rem', ''))
variable['box-size-height-default'] = Number(variable['box-size-height-default'].replace('rem', ''))
variable['box-size-height-small'] = Number(variable['box-size-height-small'].replace('rem', ''))
let fontSizeScale = {
  small: variable['font-size-small'] / variable['font-size-default'],
  large: variable['font-size-large'] / variable['font-size-default'],
  xl: variable['font-size-xl'] / variable['font-size-default']
}
/*
let boxSizeHeightScale = {
  small: variable['box-size-height-small'] / variable['box-size-height-default']
}
*/
export default {
  computed: {
    themeClasses () {
      let result = []
      Object.keys(this.variable).forEach(item => {
        if (item.indexOf('color-') > -1 || item.indexOf('font-size') > -1) {
          result.push(`.vx-${item}`)
        }
      })
      return result
    }
  },
  watch: {
    variable: {
      deep: true,
      handler (value) {
        document.querySelector('#theme-style').innerHTML = this.variableHTML = `
:root{
  --vx-color-black: ${value['color-black']};
  --vx-color-assist: ${value['color-assist']};
  --vx-color-light: ${value['color-light']};
  --vx-color-primary: ${value['color-primary']};
  --vx-color-warning: ${value['color-warning']};
  --vx-color-danger: ${value['color-danger']};
  --vx-color-error: ${value['color-error']};
  --vx-color-border: ${value['color-border']};
  --vx-color-divider: ${value['color-divider']};
  --vx-color-background: ${value['color-background']};
  --vx-color-touch-active: ${value['color-touch-active']};
  --vx-font-size-default: ${value['font-size-default']}rem;
  --vx-font-size-small: ${value['font-size-default'] * fontSizeScale['small']}rem;
  --vx-font-size-large: ${value['font-size-default'] * fontSizeScale['large']}rem;
  --vx-font-size-xl: ${value['font-size-default'] * fontSizeScale['xl']}rem;
  --vx-border-radius: ${value['border-radius']}rem;
  --vx-border-radius-dpr2: ${value['border-radius'] * 2}rem;
  --vx-border-radius-dpr3: ${value['border-radius'] * 3}rem;
  --vx-border-radius-dpr4: ${value['border-radius'] * 4}rem;
  --vx-border-radius-dpr5: ${value['border-radius'] * 5}rem;
  --vx-border-radius-dpr6: ${value['border-radius'] * 6}rem;
}
`
      }
    }
  },
  data () {
    return {
      variableHTML: '',
      variable
    }
  }
}
</script>

<style lang="scss">
  .theme{
    .vx-range--wrapper{
      width:50vw;
    }
  }
</style>
