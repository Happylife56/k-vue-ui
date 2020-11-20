
#### 介绍


k-vue-ui 基于element-ui二次开发，根据项目需求，方便项目开发使用 


#### 安装   

```bash

# Npm 
npm install k-vue-ui 

# Yarn 
yarn add k-vue-ui 

```

#### 全局引入:

```javascript

import Vue from 'vue'
import KUI from 'k-vue-ui'

Vue.use(KUI)

```

#### 按需引入


```vue
<script>
// 组件中定义
import { kInput } from 'k-vue-ui'
export default { 
  components: { kInput }
};
</script>

```







