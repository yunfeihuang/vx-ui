# Popup自定义弹框

```html
<template>
  <div>
    <group>
      <cell :arrow="false">
        <div slot="title">popup default</div>
        <x-switch slot="value" v-model="open"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">popup top</div>
        <x-switch slot="value" v-model="openTop"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">popup left</div>
        <x-switch slot="value" v-model="openLeft"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">popup right</div>
        <x-switch slot="value" v-model="openRight"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">popup center</div>
        <x-switch slot="value" v-model="openCenter"/>
      </cell>
      <cell :arrow="false">
        <div slot="title">popup full</div>
        <x-switch slot="value" v-model="openFull"/>
      </cell>
    </group>
    <popup :open.sync="open">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="open"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="top" :open.sync="openTop">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openTop"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="left" :open.sync="openLeft">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openLeft"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="right" :open.sync="openRight">
      <div style="padding:20px 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openRight"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="center" :open.sync="openCenter">
      <div style="padding:20px;min-width:200px;background:#fff;border-radius:5px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openCenter" />
          </cell>
        </group>
      </div>
    </popup>
    <popup :open.sync="openFull" :full="true">
      <div style="padding:20px 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" v-model="openFull"/>
          </cell>
        </group>
      </div>
    </popup>
  <div>
</template>
<script>
  export default {
    data () {
      return {
        open: false,
        openTop: false,
        openLeft: false,
        openRight: false,
        openCenter: false,
        openFull: false
      }
    }
  }
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| open     | 是否打开   | Boolean  |   -       |    false    |
| history     | 打开是否产生浏览器历史记录   | Boolean  |   -       |    true    |
| full     | 是否占满屏   | Boolean  |   -       |    false    |
| direction     | 渐入方向   | String  |   bottom,top,left,right,center       |    bottom    |
| fastClose     | 是否非内容区域关闭   | Boolean  |   -       |    true    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |