import MeDialog from "./index.vue";
MeDialog.install = Vue => {
  Vue.component(MeDialog.name, MeDialog);
};

export default MeDialog;
