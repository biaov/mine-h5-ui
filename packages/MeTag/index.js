import MeTag from "./index.vue";
MeTag.install = Vue => {
  Vue.component(MeTag.name, MeTag);
};

export default MeTag;
