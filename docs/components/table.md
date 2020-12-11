---
API:
 - name: tableData
   type: Array
   parameters: null
   description: 表格数据
 - name: tableColumn
   type: Array
   parameters: null
   description: 表格参数对象
 - name: rank
   type: String
   parameters: null
   description: 是否显示排行
   default: '排行'
 - name: bitSet
   type: Boolean
   parameters: null
   description: 是否显示操作行
   default: false
 - name: btnFixed
   type: String, Boolean
   parameters: true, false, 'left', 'right'
   description: 操作列是否固定在左侧或者右侧，true 表示固定在左侧
   default: false
 - name: btnWidth
   type: String
   parameters: null
   description: 操作行的宽度
   default: 120px 
 - name: totalElements
   type: Number
   parameters: null
   description: 总条目数, 如果大于设置的pageSize则显示分页
   default: null 
 - name: pageSize
   type: Number
   parameters: null
   description: 每页显示条目个数
   default: 10
Attrs: 
 - name: width
   type: String
   parameters: null
   description: 对应列的宽度
   default: null
 - name: minWidth
   type: String
   parameters: null
   description: 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列
   default: null
 - name: sortable
   type: Boolean
   parameters: null
   description: 对应列是否可以排序
   default: null
 - name: toolTip moneyType
   type: Boolean
   parameters: 默认隐藏显示，如果为true，不隐藏 
   description: 当内容过长被隐藏时显示 tooltip
   default:  false
 - name: moneyType
   type: Boolean
   parameters: 小数点后两位
   description: 是否做金额处理
   default:  false
 - name: unit
   type: String
   parameters: 商品价格可以显示单位，例如：10/公斤
   description: 显示数据单位
   default:  null
 - name: custom
   type: String
   parameters: null
   description: 是否自定义列
   default:  null
Methods:
 - name: tableData
   parameters: null
   description: 表格数据
 - name: tableColumn
   parameters: null
   description: 表格参数对象  
---

### Table表格

::: tip
  把table组件二次封装，方便项目中使用
:::

#### 基础用法 

<vuecode md>
<div>
 <vTable demo/>
</div>
<div slot="code">

```html
<template>
  <k-table :tableColumn="tableColumn" :tableData="tableData"></k-table>
</template>

<script>
export default {
  data() {
    return {
      tableColumn: [
        { label: '日期', prop: 'date' },
        { label: '名字', prop: 'name' },
        { label: '地址', prop: 'address' },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style></style>
```

</div>
</vuecode>

#### 编辑用法

<vuecode md>
<div>
  <vTable set/>
</div>
<div slot="code">

```html
<template>
  <k-table :tableColumn="tableColumn" :tableData="tableData" bitSet btnWidth="180px" v-if="set">
    <template slot-scope="{ item }">
        <k-button plain size="small" @click="editItem(item)">编辑</k-button>
        <k-button size="small" @click="deleteItem(item)">删除</k-button>
    </template>
  </k-table>
</template>

<script>
export default { 
  data() {
    return {
      tableColumn: [
        { label: '日期', prop: 'date' },
        { label: '名字', prop: 'name' },
        { label: '地址', prop: 'address' },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    editItem(item) {
      console.log('edititem: ', item);
    },
    deleteItem(item) {
      console.log('deleteitem: ', item);
    }
  }
}
</script>

<style></style>
```

</div>
</vuecode>

#### 自定义类型

<vuecode md>
<div>
  <vTable custom/>
</div>

<div slot="code">

```html
<template>
  <div>
    <k-table :tableColumn="customColumn" :tableData="tableData" v-if="custom">
      <template slot-scope="{ item }" slot="age">
        <k-input v-model="item.age" size="small" @change="changeAge(item)" />
      </template>
    </k-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableColumn: [
        { label: '日期', prop: 'date' },
        { label: '名字', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '年龄', prop: 'age', custom: 'age' },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        age: 10,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        age: 20,
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        age: 30,
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        age: 40,
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    changeAge(item) {
      console.log('item.age：', item.age)
      console.log('tableData：', this.tableData)
    }
  }
}
</script>

<style></style>
```

</div>
</vuecode>


#### Table Attributes
::: tip
  其他参数和element-ui类似，可以直接用element-ui参数
:::
<vuetable ></vuetable>

#### TableColumn Attributes

<vuetable attrs></vuetable>

#### Table Methods

<vuetable methods></vuetable>



