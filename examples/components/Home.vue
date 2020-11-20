<template>
  <div class="home flex">
    <div class="left-menu">
      <div class="menu-title flex-center">
        k-ui
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" router @select="handleSelect">
        <el-menu-item v-for="item in menuList" :key="item.name" :index="item.name">
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right-view">
      <router-view />
    </div>
  </div>
</template>

<script>
// import { getComponent } from '../utils';

export default {
  data() {
    return {
      activeIndex: 'input',
      menuList: [
        { title: 'input输入框', name: 'input' },
        { title: 'table', name: 'table' },
        { title: 'test测试', name: 'test' },
      ],
    };
  },
  mounted() {
    // const { listNames } = getComponent();
    // this.menuList = listNames;
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .el-menu {
    border: none;
  }
  .left-menu {
    width: 200px;
    overflow: auto;
    border-right: solid 1px #e6e6e6;
    .menu-title {
      height: 60px;
      border-bottom: solid 1px #e6e6e6;
      font-size: 20px;
    }
  }
  .right-view {
    flex: 1;
    padding: 20px;
  }
}
</style>
