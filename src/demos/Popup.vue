<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Popup"></vx-nav>
    </template>
    <vx-page-body>
      <vx-group>
        <vx-cell :arrow="false">
          <template v-slot:title>popup default</template>
          <template v-slot:value><vx-switch v-model="open"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>popup top</template>
          <template v-slot:value><vx-switch v-model="openTop"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>popup left</template>
          <template v-slot:value><vx-switch v-model="openLeft"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>popup right</template>
          <template v-slot:value><vx-switch v-model="openRight"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>popup center</template>
          <template v-slot:value><vx-switch v-model="openCenter"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>popup full && show close</template>
          <template v-slot:value><vx-switch v-model="openFull"/></template>
        </vx-cell>
        <vx-cell :arrow="false">
          <template v-slot:title>popup full && title</template>
          <template v-slot:value><vx-switch v-model="openFullTitle"/></template>
        </vx-cell>
      </vx-group>
    </vx-page-body>
    <vx-popup v-model:open="open">
      <div style="padding:0.5rem 0;">
        <vx-group>
          <vx-cell :arrow="false">
            <template v-slot:title>popup close</template>
            <template v-slot:value><vx-switch v-model="open"/></template>
          </vx-cell>
        </vx-group>
      </div>
    </vx-popup>
    <vx-popup direction="top" v-model:open="openTop">
      <div style="padding:0.5rem 0;">
        <vx-group>
          <vx-cell :arrow="false">
            <template v-slot:title>popup close</template>
            <template v-slot:value><vx-switch v-model="openLeft"/></template>
          </vx-cell>
        </vx-group>
      </div>
    </vx-popup>
    <vx-popup direction="left" v-model:open="openLeft">
      <div style="padding:0.5rem 0;min-width:200px;">
        <vx-group>
          <vx-cell :arrow="false">
            <template v-slot:title>popup close</template>
            <template v-slot:value><vx-switch v-model="openLeft"/></template>
          </vx-cell>
        </vx-group>
      </div>
    </vx-popup>
    <vx-popup direction="right" v-model:open="openRight">
      <div style="padding:0.5rem 0;min-width:200px;">
        <vx-group>
          <vx-cell :arrow="false">
            <template v-slot:title>popup close</template>
            <template v-slot:value><vx-switch v-model="openRight"/></template>
          </vx-cell>
        </vx-group>
      </div>
    </vx-popup>
    <vx-popup direction="center" v-model:open="openCenter" show-close>
      <div style="padding:0.5rem;min-width:200px;background:#fff;border-radius:5px;">
        <vx-group>
          <vx-cell :arrow="false">
            <template v-slot:title>popup close</template>
            <template v-slot:value><vx-switch v-model="openCenter" /></template>
          </vx-cell>
        </vx-group>
      </div>
    </vx-popup>
    <vx-popup v-model:open="openFull" full show-close>
      <div style="padding:0.5rem 0;">
        <vx-group>
          <vx-cell :arrow="false">
            <template v-slot:title>popup full close</template>
            <template v-slot:value><vx-switch v-model="openFull"/></template>
          </vx-cell>
        </vx-group>
      </div>
    </vx-popup>
    <vx-popup v-model:open="openFullTitle" full title="title" direction="right">
      <div style="padding:0 0.2rem">
      新华社北京5月27日电 中共中央政治局5月26日下午就推动形成绿色发展方式和生活方式进行第四十一次集体学习。中共中央总书记习近平在主持学习时强调，推动形成绿色发展方式和生活方式是贯彻新发展理念的必然要求，必须把生态文明建设摆在全局工作的突出地位，坚持节约资源和保护环境的基本国策，坚持节约优先、保护优先、自然恢复为主的方针，形成节约资源和保护环境的空间格局、产业结构、生产方式、生活方式，努力实现经济社会发展和生态环境保护协同共进，为人民群众创造良好生产生活环境。
      学习开始时，播放了有关生态环境保护的专题片。随后，何立峰、姜大明、陈吉宁、陈政高、陈雷同志先后发言，他们结合本部门工作实际谈了对推进生态文明建设、推动绿色发展、加强环境保护等方面的体会和意见。
      </div>
    </vx-popup>
  </vx-page>
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
