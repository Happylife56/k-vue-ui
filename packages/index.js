import KInput from './input/input.vue';
import KTable from './table/table.vue';

if (typeof window !== 'undefined' && window.Vue) {
  const vue = window.Vue;
  vue.component(KInput, KInput);
  vue.component(KTable, KTable);
}
