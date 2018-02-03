# Flexbox布局

```html
<style>
  .flexbox-item{
    background:#3399ff;
    border-radius:6px;
    text-align:center;
    color:#fff;
    line-height:30px;
  }
  .flex-wrap .flexbox-item{
    margin:5px 0;
  }
</style>
<flexbox :gutter="10">
  <flexbox-item>
    <div class="flexbox-item">1</div>
  </flexbox-item>
  <flexbox-item>
    <div class="flexbox-item">2</div>
  </flexbox-item>
  <flexbox-item>
    <div class="flexbox-item">3</div>
  </flexbox-item>
</flexbox>

### 跨度
<flexbox :gutter="10">
  <flexbox-item>
    <div class="flexbox-item">1</div>
  </flexbox-item>
  <flexbox-item :flex="2">
    <div class="flexbox-item">2</div>
  </flexbox-item>
  <flexbox-item :flex="3">
    <div class="flexbox-item">3</div>
  </flexbox-item>
</flexbox>

### 列布局
<flexbox direction="column">
  <flexbox-item>
    <div class="flexbox-item">1</div>
  </flexbox-item>
  <flexbox-item style="margin:10px 0">
    <div class="flexbox-item">2</div>
  </flexbox-item>
  <flexbox-item>
    <div class="flexbox-item">2</div>
  </flexbox-item>
</flexbox>

### 项目换行
<flexbox :gutter="10" wrap="wrap" class="flex-wrap">
  <flexbox-item width="25%">
    <div class="flexbox-item">1</div>
  </flexbox-item>
  <flexbox-item width="25%">
    <div class="flexbox-item">2</div>
  </flexbox-item>
  <flexbox-item width="25%">
    <div class="flexbox-item">3</div>
  </flexbox-item>
  <flexbox-item width="25%">
    <div class="flexbox-item">4</div>
  </flexbox-item>
  <flexbox-item width="25%">
    <div class="flexbox-item">5</div>
  </flexbox-item>
  <flexbox-item width="25%">
    <div class="flexbox-item">6</div>
  </flexbox-item>
</flexbox>
```
### Flexbox
#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| wrap     | css flexbox wrap   | -  |   String       |    -    |
| direction     | css flexbox wrap   | -  |   String       |    -    |
| justify     | css flexbox justify-content   | -  |   String       |    -    |
| align     | css flexbox align-items   | -  |   String       |    -    |
| gutter     | 间距   | -  |   number       |    -    |

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
| width     | css width   | -  |   String       |    -    |

#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| - | - | - |

#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |