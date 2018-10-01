# Popover对话框

```
<template>
  <div>
    <flexbox style="margin-bottom:300px">
        <flexbox-item>
          <popover :open="true">
            <x-button slot="trigger">left top</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right top</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <popover>
            <x-button slot="trigger">left bottom</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
            </ul>
          </popover>
        </flexbox-item>
        <flexbox-item style="text-align:right">
          <popover>
            <x-button slot="trigger">right bottom</x-button>
            <ul class="vx-popover--menu">
              <li class="vx-popover--menu-item" @click="handleClick('扫一扫')">扫一扫</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('找朋友')">找朋友</li>
              <divider></divider>
              <li class="vx-popover--menu-item" @click="handleClick('收付款')">收付款</li>
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
        window.$toast({message: '您点击了：' + value})
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