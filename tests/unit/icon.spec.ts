import { mount } from "@vue/test-utils";
import MeIcon from "~/MeIcon/index.vue";

describe("MeIcon", () => {
  test("props name", () => {
    // 向组件里传参
    const wrapper = mount(MeIcon, {
      props: { name: "icon-github" }
    });
    const viewer = wrapper.find(".me-icon"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    expect(viewer.classes("icon-github")).toBe(true); // 是否存在值
  });
  test("emit on-click", async () => {
    // 向组件里传参
    const wrapper = mount(MeIcon, {
      props: { name: "icon-github" }
    });
    const viewer = wrapper.find(".me-icon"); // 获取 DOM
    await viewer.trigger("click");
    expect(wrapper.emitted("on-click")).toBeDefined();
  });
});
