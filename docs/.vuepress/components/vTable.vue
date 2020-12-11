<template>
  <div class="table-demo">
    <!-- default -->
    <k-table :tableColumn="tableColumn" :tableData="tableData" v-if="demo"></k-table>
    <!-- 编辑 -->
    <k-table :tableColumn="tableColumn" :tableData="tableData" bitSet btnWidth="180px" v-if="set">
      <template slot-scope="{ item }">
        <k-button plain size="small" @click="editItem(item)">编辑</k-button>
        <k-button size="small" @click="deleteItem(item)">删除</k-button>
      </template>
    </k-table>
    <!-- 自定义类型 -->
    <k-table :tableColumn="customColumn" :tableData="tableData" v-if="custom">
      <template slot-scope="{ item }" slot="age">
        <k-input v-model="item.age" size="small" @change="changeAge(item)" />
      </template>
    </k-table>
  </div>
</template>

<script>
export default {
  name: 'vtable',
  props: {
    demo: { type: Boolean, default: false },
    set: { type: Boolean, default: false },
    custom: { type: Boolean, default: false },
  },
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
      }],
      customColumn: [
        { label: '日期', prop: 'date' },
        { label: '名字', prop: 'name' },
        { label: '地址', prop: 'address' },
        { label: '年龄', prop: 'age', custom: 'age' },
      ]
    }
  },
  methods: {
    editItem(item) {
      console.log('edititem: ', item);
    },
    deleteItem(item) {
      console.log('deleteitem: ', item);
    },
    changeAge(item) {
      console.log('item.age：', item.age)
      console.log('tableData：', this.tableData)
    }
  }
}
</script>

<style>
</style>