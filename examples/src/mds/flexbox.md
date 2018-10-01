# Flexbox布局

```
<template>
  <div class="flexbox-demo">
    ### 平均跨度
    <flexbox :gutter="10">
      <flexbox-item>1</flexbox-item>
      <flexbox-item>2</flexbox-item>
      <flexbox-item>3</flexbox-item>
    </flexbox>
    <br />
    ### 跨度
    <flexbox :gutter="10">
      <flexbox-item>1</flexbox-item>
      <flexbox-item :flex="2">2</flexbox-item>
      <flexbox-item :flex="3">3</flexbox-item>
    </flexbox>
    <br />
    ### 列布局
    <flexbox direction="column">
      <flexbox-item>1</flexbox-item>
      <flexbox-item style="margin:10px 0">2</flexbox-item>
      <flexbox-item>3</flexbox-item>
    </flexbox>
  </div>
</template>
<style lang="scss">
  .flexbox-demo{
    padding:10px;
    overflow:hidden;
    background: #fff;
    .vx-flexbox--item{
      background:#eee;
      border-radius:6px;
      text-align:center;
      line-height:0.8rem;
    }
  }
</style>

```
### Flexbox
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| wrap     | css flexbox wrap   | String  |      -    |    -    |
| direction     | css flexbox wrap   | String |    -      |    -    |
| justify     | css flexbox justify-content   | String  |     -     |    -    |
| align     | css flexbox align-items   | String  |    -      |    -    |
| gutter     | 间距   | Number,String  |   -       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |

### FlexboxItem
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| flex     | css flex   | -  |   String,Number       |    1    |
| order     | css order   | -  |   String       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |