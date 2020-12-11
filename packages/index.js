import directives from './directives';
import filters from './filters';
import KInput from './input';
import KButton from './button';
import KTable from './table';

const KUI = {
  KButton,
  KInput,
  KTable,
};

function startsWith(string, query, position = 0) {
  return string.substr(position, query.length) === query;
}

KUI.install = function (Vue) {
  Object.keys(KUI).forEach((key) => {
    if (startsWith(key, 'K')) {
      const Component = KUI[key];
      Vue.component(Component.name, Component);
    }
  });
  // 自定义指令
  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
  });
  // 过滤器
  Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key]);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(KUI);
}

export default KUI;

// if (typeof window !== 'undefined' && window.Vue) {
//   Object.keys(KUI).forEach((key) => {
//     const Component = KUI[key];
//     window.Vue.component(Component.name, Component);
//   });
// }

export {
  KInput, KTable, directives, filters,
};
