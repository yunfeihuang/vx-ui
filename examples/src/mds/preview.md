# Preview图片浏览

```html
<template>
  <div>
    <x-img
      v-for="(item,index) in images"
      :key="index" :loading="true"
      :src="item.src"
      @load="handleLoad(index,$event)"
      @click.native="handleClick(index)"/>
    <preview :list="images" ref="preview"/>
  </div>
</template>
<script>
let windowWidth = window.innerWidth
export default {
  data () {
    return {
      images: [
        {
          src: 'http://assets.bittyos.com/images/swiper/01.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/02.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/03.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/04.jpg'
        },
        {
          src: 'http://assets.bittyos.com/images/swiper/05.jpg'
        }
      ]
    }
  },
  methods: {
    handleLoad (index, e) {
      let img = e.target
      let natural = {
        w: img.naturalWidth,
        h: img.naturalHeight
      }
      let item = {
        src: img.src,
        w: natural.w > windowWidth ? windowWidth : natural.w,
        h: natural.w > windowWidth ? natural.h / natural.w * windowWidth : natural.h
      }
      this.images[index] = item
    },
    handleClick (index) {
      this.$refs.preview.open(index)
    }
  }
}
</script>
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| list     |  图片数组  | Array[{src,w,h}]  |   -       |    -    |
| index     | 初始显示图片数组的索引   | -  |   -       |    -    |
| options     | photoswipe选项配置，详细配置参考：https://github.com/dimsemenov/PhotoSwipe   | -  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| close | 关闭事件 | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| - | - |