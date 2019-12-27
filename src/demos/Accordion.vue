<template>
  <page>
    <x-nav slot="header" title="Accordion"></x-nav>
    <page-body slot="body">
      <accordion>
        <accordion-item title="标题文字" open>
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </accordion-item>
        <accordion-item title="标题文字">
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </accordion-item>
      </accordion>
      <br />
      非互斥状态:mutex="false"
      <accordion :mutex="false">
        <accordion-item title="标题文字" open>
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </accordion-item>
        <accordion-item title="标题文字">
          如果有一天我能够拥有一个大果园，
          我愿放下所有追求做个农夫去种田，
          每一个早晨我耕耘在绿野田园，
          每一个黄昏我守望在乡间的麦田。
          我会把忧虑都融化在夕阳里，
          让孤独的心等待秋收的欢喜。
        </accordion-item>
      </accordion>
    </page-body>
  </page>
</template>
<script>

</script>
