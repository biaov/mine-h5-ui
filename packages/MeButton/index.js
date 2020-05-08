import MeButton from "./index.vue";
MeButton.install = Vue => {
  Vue.component(MeButton.name, MeButton);
};

export default MeButton;