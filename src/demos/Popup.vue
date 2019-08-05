<template>
  <layout>
    <x-nav slot="header" back="/" title="Popup"></x-nav>
    <x-body slot="body">
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
          <div slot="title">popup full && show close</div>
          <x-switch slot="value" v-model="openFull"/>
        </cell>
        <cell :arrow="false">
          <div slot="title">popup full && title</div>
          <x-switch slot="value" v-model="openFullTitle"/>
        </cell>
      </group>
    </x-body>
    <popup :open.sync="open">
      <div style="padding:0.5rem 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="open"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="top" :open.sync="openTop">
      <div style="padding:0.5rem 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openLeft"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="left" :open.sync="openLeft">
      <div style="padding:0.5rem 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openLeft"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="right" :open.sync="openRight">
      <div style="padding:0.5rem 0;min-width:200px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openRight"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup direction="center" :open.sync="openCenter">
      <div style="padding:0.5rem;min-width:200px;background:#fff;border-radius:5px;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup close</div>
            <x-switch slot="value" v-model="openCenter" />
          </cell>
        </group>
      </div>
    </popup>
    <popup :open.sync="openFull" :full="true" :show-close="true">
      <div style="padding:0.5rem 0;">
        <group>
          <cell :arrow="false">
            <div slot="title">popup full close</div>
            <x-switch slot="value" v-model="openFull"/>
          </cell>
        </group>
      </div>
    </popup>
    <popup :open.sync="openFullTitle" :full="true" title="title" direction="right">
      <div style="padding:0 0.2rem">
      新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。
      学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。
      </div>
    </popup>
  </layout>
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
      openFull: false,
      openFullTitle: false
    }
  }
}
</script>

<style lang="scss">

</style>
