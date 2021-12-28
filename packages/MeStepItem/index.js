import MeStepItem from "./index.vue";

MeStepItem.install = Vue => {
  Vue.component(MeStepItem.name, MeStepItem);
};

export default MeStepItem;
