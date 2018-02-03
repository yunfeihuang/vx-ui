# Popover对话框

```html
<template>
  <div>
    <flexbox style="margin-bottom:300px">
      <flexbox-item>
        <popover :open="true">
          <x-button slot="trigger">left top</x-button>
          <ul class="popover-menu">
            <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
            <divider></divider>
            <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
            <divider></divider>
            <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
          </ul>
        </popover>
      </flexbox-item>
      <flexbox-item style="text-align:right">
        <popover>
          <x-button slot="trigger">right top</x-button>
          <ul class="popover-menu">
            <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
            <divider></divider>
            <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
            <divider></divider>
            <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
          </ul>
        </popover>
      </flexbox-item>
    </flexbox>
    <flexbox>
      <flexbox-item>
        <popover>
          <x-button slot="trigger">left bottom</x-button>
          <ul class="popover-menu">
            <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
            <divider></divider>
            <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
            <divider></divider>
            <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
          </ul>
        </popover>
      </flexbox-item>
      <flexbox-item style="text-align:right">
        <popover>
          <x-button slot="trigger">right bottom</x-button>
          <ul class="popover-menu">
            <li @click="handleClick('扫一扫')"><icon>&#xe651;</icon>扫一扫</li>
            <divider></divider>
            <li @click="handleClick('找朋友')"><icon>&#xe727;</icon>找朋友</li>
            <divider></divider>
            <li @click="handleClick('收付款')"><icon>&#xe654;</icon>收付款</li>
          </ul>
        </popover>
      </flexbox-item>
    </flexbox>
  <div>
</template>
<script>
  export default {
    methods: {
      handleClick (value) {
        window.$toast({content: '您点击了：' + value})
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
| overlayOpacity     | 遮罩层透明度   | Number  |   -       |    -    |
| popoverClass     | 内容区class   | String  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |
| trigger | 触发open |