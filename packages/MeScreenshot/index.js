import MeScreenshot from "./index.vue";

MeScreenshot.install = Vue => {
  Vue.component(MeScreenshot.name, MeUpload);
};

export default MeScreenshot;
