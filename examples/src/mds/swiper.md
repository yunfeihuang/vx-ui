# Swiper轮播

```html
<template>
  <div>
    <swiper :active="active" :options="options" class="swiper-demo">
      <swiper-item v-for="(item,index) in images" :key="index">
        <img :src="item" class="swiper-img" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      images: [
        'http://assets.bittyos.com/images/swiper/01.jpg',
        'http://assets.bittyos.com/images/swiper/02.jpg',
        'http://assets.bittyos.com/images/swiper/03.jpg',
        'http://assets.bittyos.com/images/swiper/04.jpg',
        'http://assets.bittyos.com/images/swiper/05.jpg'
      ],
      active: 0,
      options: {
        speed: 500
      }
    }
  }
}
</script>
```

### Swiper
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| active     | 显示第几个项   | Number  |   -       |    0    |
| pagination     | 是否有分页   | Boolean  |   -       |    true    |
| prev     | 是否有上一页   | Boolean  |   -       |    false    |
| next     | 是否有下一页   | Boolean  |   -       |    false    |
| scrollbar     | 是否有滚动   | Boolean  |   -       |    false    |
| options     | swiper选项配置，详细配置参考：https://github.com/nolimits4web/swiper   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | active改变事件 | value |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |

### SwiperItem
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