
#### 介绍


k-vue-ui 基于element-ui二次开发，根据项目需求，方便项目开发使用 


#### 安装   

```bash

# Npm 
npm install k-vue-ui 

# Yarn 
yarn add k-vue-ui 

```


#### 使用  按需引入


```vue
<script>
// 组件中定义
import { kInput } from 'k-vue-ui'
export default { 
  components: { kInput }
};
</script>

```



#### 全局components:

```javascript

import Vue from 'vue'
import { kInput } from 'k-vue-ui'

Vue.use(kInput)

```




