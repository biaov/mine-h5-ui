import MeProgressBar from "./index.vue";
MeProgressBar.install = Vue => {
  Vue.component(MeProgressBar.name, MeProgressBar);
};

export default MeProgressBar;
