<template>
  <!-- // 公用的表格和分页 -->
  <div class="table-page">
    <el-table :data="tableData" style="width: 100%" v-bind="$attrs" @sort-change="sortChange">
      <!-- 序号 -->
      <el-table-column v-if="rank" :label="rank" width="70">
        <template slot-scope="scope">
          {{ (scope.$index + 1) + (currentPage - 1) * pageSize }}
        </template>
      </el-table-column>
      <el-table-column v-for="(item, index) in tableColumn" :key="index" :prop="item.prop" :label="item.label" :min-width="item.minWidth" :width="item.width" :sortable="item.sortable" :show-overflow-tooltip="!item.toolTip">
        <template slot-scope="scope">
          <!-- 自定义 -->
          <span v-if="item.custom">
            <slot :item="scope.row" :name="item.custom" />
          </span>
          <span v-else>
            <span v-if="scope.row[item.prop] == '0'">
              {{ scope.row[item.prop] }}
            </span>
            <span v-else>
              <!-- 如果是金额处理金额 -->
              <span v-if="item.moneyType">
                {{ scope.row[item.prop] | moneyPoint('table') }}
                <span v-if="item.unit">
                  {{ item.unit }}
                </span>
              </span>
              <span v-else-if="item.unit">
                {{ scope.row[item.prop] || 0 }}{{ item.unit }}
              </span>
              <span v-else>
                {{ scope.row[item.prop] | paramsType }}
              </span>
            </span>
          </span>
        </template>
      </el-table-column>
      <el-table-column v-if="bitSet" label="操作" :width="btnWidth">
        <template slot-scope="scope">
          <slot :item="scope.row" />
        </template>
      </el-table-column>
    </el-table>
    <div class="mt20 page-div flex-between">
      <div class="page-text">
        <slot name="pageText" />
      </div>
      <div v-if="totalElements > pageSize" class="text-right">
        <el-pagination :current-page.sync="currentPage" :page-size="pageSize" layout="prev, pager, next,total, jumper" :total="totalElements" @current-change="handleCurrentChange" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KTable',
  props: {
    tableColumn: {
      type: Array,
      default: () => [],
    },
    tableData: {
      type: Array,
      default: () => [],
    },
    totalElements: {
      type: Number,
      default: 9,
    },
    // 操作列的宽度
    btnWidth: {
      type: String,
      default: '120px',
    },
    // 操作列是否存在
    bitSet: {
      type: Boolean,
      default: false,
    },
    // 分页页数
    pageSize: {
      type: Number,
      default: 10,
    },
    // 是否有排行
    rank: {
      type: String,
      default: '',
    },
    // 列是否固定在左侧或者右侧，true 表示固定在左侧
    btnFixed: {
      type: [String, Boolean],
      default: false,
      validator: (value) => [true, false, 'left', 'right'].includes(value),
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  watch: {
    totalElements(val) {
      if (val) this.currentPage = 1;
    },
    // 处理数据格式
    tableData(val) {
      console.log('val: ', val);
      val.forEach((items) => {
        Object.keys(items).forEach((key) => {
          if (typeof items[key] === 'number') {
            items[key] = this.toFixed2(items[key]);
          }
        });
      });
    },
  },
  methods: {
    // 切换页数
    handleCurrentChange() {
      // 切换分页
      this.$emit('current-change', this.currentPage);
    },
    // 升降序
    sortChange({ column, prop, order }) {
      if (order === null) return;
      const isAsc = order !== 'ascending';
      this.$emit('sort-change', {
        prop, order: isAsc, currentPage: this.currentPage, column,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
