# IndexList 索引列表

```
<template>
  <index-list :data="list" />
</template>
<script>
export default {
  data () {
    let list =  []
    let array = ['★', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L']
    array.forEach(item1 => {
      let items = array.map(item2 => {
        return {
          value: item1 + item2,
          label: `label-${item1 + item2}`
        }
      })
      list.push({
        label: item1,
        items
      })
    })
    return {
      list
    }
  }
}
</script>

  
```

#### Props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |------------- |--------- |
| data     | -   | Array  |   -       |    -    |



#### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| click | - | - |


#### Slots
| 名称 | 说明 | 
|---------|--------|
| default | - |