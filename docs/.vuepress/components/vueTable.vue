<template >
  <div v-if="methods" class="table-api mt20">
    <table class="methods-style">
      <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody v-for="tr in api">
        <tr>
          <td>{{tr.name}}</td>
          <td>{{tr.description}}</td>
          <td>{{tr.parameters}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else class="table-api mt20">
    <table class="api-style">
      <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody v-for="tr in api">
        <tr>
          <td width="120px">{{tr.name}}</td>
          <td>{{tr.description}}</td>
          <td>{{tr.type}}</td>
          <td>{{tr.parameters}}</td>
          <td>{{tr.default}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'vuetable',
  props: {
    methods: { type: Boolean, default: false }
  },
  computed: {
    api() {
      if (this.methods) return this.$page.frontmatter.Methods
      return this.$page.frontmatter.API
    },
    data() {
      return this.$page.frontmatter
    },
  }
}
</script>

<style lang="scss" scoped>
.h2 a {
  color: rgba(0, 0, 0, 0.61);
  font-size: 22px;
  transform: scale(0.5);
  opacity: 0;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
}
.h2 a:hover {
  opacity: 0.7 !important;
}
.h2:hover a {
  opacity: 1;
  transform: scale(1);
  color: rgb(var(--morado));
}
.h3-ejemplo {
  padding: 20px;
  font-weight: lighter;
}
.btn-ejemplo button {
  padding: 10px;
}
.btn-ejemplo {
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-api {
  width: calc(100% - 20px);
  margin: auto;
  max-width: 1200px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 20px 40px -15px rgba(0, 0, 0, 0.05);
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
  margin-top: 0px !important;
}
.con-api::-webkit-scrollbar {
  height: 5px;
}
.con-api::-webkit-scrollbar-thumb {
  background: rgb(200, 200, 200);
}
.con-api h2 {
  color: rgb(var(--morado));
  padding: 15px;
  /* font-weight: lighter; */
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.050); */
}
table {
  width: 100%;
  border-collapse: collapse;
  thead,
  tbody,
  tr {
    width: 100% !important;
    display: flex;
    td,
    th {
      width: 18%;
      &:nth-child(2) {
        width: 28%;
      }
    }
  }
}

.methods-style {
  td,
  th {
    width: 25%;
    &:nth-child(2) {
      width: 50%;
    }
  }
}

table td {
  padding: 15px;
  // border: 1px solid rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.9rem;
}
th {
  padding: 15px;
  text-align: left;
  border: 1px solid #dcdfe6;
  font-size: 0.9rem !important;
  background: rgb(250, 250, 250);
}
tbody tr {
  border-bottom: 1px solid #dcdfe6;
}

@media only screen and (max-width: 650px) {
  .con-api {
    width: calc(100% - 30px);
  }
  table td {
    font-size: 13px !important;
  }
}
</style>
