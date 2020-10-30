import MeTabItem from "./index.vue";
MeTabItem.install = Vue => {
  Vue.component(MeTabItem.name, MeTabItem);
};

export default MeTabItem;
