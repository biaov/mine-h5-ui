import MeVirtualList from "./index.vue";

MeVirtualList.install = Vue => {
  Vue.component(MeVirtualList.name, MeUpload);
};

export default MeVirtualList;
