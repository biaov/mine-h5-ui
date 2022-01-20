import MeSearch from "./index.vue";
MeSearch.install = Vue => {
  Vue.component(MeSearch.name, MeSearch);
};

export default MeSearch;
