<template>
  <vx-page>
    <template v-slot:header>
      <vx-nav title="Accordion"></vx-nav>
    </template>
    <vx-page-body>
      <vx-accordion>
        <vx-accordion-item title="标题文字" open>
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </vx-accordion-item>
        <vx-accordion-item title="标题文字">
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </vx-accordion-item>
      </vx-accordion>
      <br />
      非互斥状态:mutex="false"
      <vx-accordion :mutex="false">
        <vx-accordion-item title="标题文字" open>
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </vx-accordion-item>
        <vx-accordion-item title="标题文字">
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </vx-accordion-item>
      </vx-accordion>
    </vx-page-body>
  </vx-page>
</template>
<script>

</script>
