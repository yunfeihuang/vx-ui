# Accordion手风琴

```
<template>
  <div>
    <accordion>
      <accordion-item title="标题文字" :open="true">
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
  </div>
</template>
```
### AccordionItem
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| title     | 标题文字   | String  |   -       |    -    |
| open     | 是否打开   | Boolean  |   -       |    false    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |
| title | 标题 |