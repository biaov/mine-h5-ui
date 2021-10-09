import { mount } from "@vue/test-utils";
import MeRate from "~/MeRate/index.vue";

describe("MeRate", () => {
  test("props icon", () => {
    const icon = "icon-github";
    // 向组件里传参
    const wrapper = mount(MeRate, {
      props: { icon }
    });
    const viewer = wrapper.find(".me-rate"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    const iconEl = viewer.find(".iconfont:first-child");
    expect(iconEl.exists()).toBeTruthy();
    expect(iconEl.classes(icon)).toBe(true);
  });
  test("props iconSelect", async () => {
    const iconSelect = "icon-github";
    // 向组件里传参
    const wrapper = mount(MeRate, {
      props: { iconSelect }
    });
    const viewer = wrapper.find(".me-rate .iconfont:first-child"); // 获取 DOM
    await viewer.trigger("click");
    expect(viewer.classes(iconSelect)).toBe(true);
  });
  test("props count", () => {
    const count = 4;
    // 向组件里传参
    const wrapper = mount(MeRate, {
      props: { count }
    });
    const viewer = wrapper.findAll(".me-rate .iconfont"); // 获取 DOM
    expect(viewer.length).toBe(count);
  });
  test("props disabled", () => {
    // 向组件里传参
    const wrapper = mount(MeRate, {
      props: { disabled: true }
    });
    const viewer = wrapper.find(".me-rate"); // 获取 DOM
    expect(viewer.attributes("aria-disabled")).toBe("true");
  });
  test("emit on-change", async () => {
    // 向组件里传参
    const wrapper = mount(MeRate);
    const viewer = wrapper.find(".me-rate .iconfont:first-child"); // 获取 DOM
    await viewer.trigger("click");
    expect(wrapper.emitted("on-change")).toBeDefined();
  });
});
