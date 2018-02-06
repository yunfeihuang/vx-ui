# Marquee公告提示

```html
<template>
  <div>
    <x-marquee>
      <x-marquee-item>
        天猫双十一优惠！
      </x-marquee-item>
      <x-marquee-item>
        京东618优惠！
      </x-marquee-item>
    </x-marquee>
    <x-marquee direction="horizontal">
      <x-marquee-item>
        天猫双十一优惠！
      </x-marquee-item>
      <x-marquee-item>
        京东618优惠！
      </x-marquee-item>
    </x-marquee>
  </div>
</template>
```
### Marquee
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| direction     | 滚动方向   | String  |   vertical,horizontal       |    vertical    |
| autoplay     | 播放时长   | Number  |   -       |    2000    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |

### MarqueeItem
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| -     | -   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |