import MeUpload from "./index.vue";
MeUpload.install = Vue => {
  Vue.component(MeUpload.name, MeUpload);
};

export default MeUpload;
