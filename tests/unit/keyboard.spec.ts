import { mount } from "@vue/test-utils";
import MeKeyboard from "~/MeKeyboard/index.vue";

describe("MeKeyboard", () => {
  test("props visible", () => {
    // 向组件里传参
    const wrapper = mount(MeKeyboard, {
      props: { visible: true }
    });
    const viewer = wrapper.find(".me-keyboard"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    expect(viewer.classes("show")).toBe(true);
  });
  test("props skinType", () => {
    const skinType = "dark";
    // 向组件里传参
    const wrapper = mount(MeKeyboard, {
      props: { skinType }
    });
    const viewer = wrapper.find(".me-keyboard"); // 获取 DOM
    expect(viewer.classes(`me-keyboard-${skinType}`)).toBe(true);
  });
  test("emit on-click", async () => {
    // 向组件里传参
    const wrapper = mount(MeKeyboard);
    const viewer = wrapper.find(".me-keyboard>li:first-child"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    await viewer.trigger("click");
    expect(wrapper.emitted("on-click")).toBeDefined();
  });
  test("emit on-delete", async () => {
    // 向组件里传参
    const wrapper = mount(MeKeyboard);
    const viewer = wrapper.find(".me-keyboard>li:last-child"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    await viewer.trigger("click");
    expect(wrapper.emitted("on-delete")).toBeDefined();
  });
  test("emit on-complate", async () => {
    // 向组件里传参
    const wrapper = mount(MeKeyboard);
    const viewer = wrapper.find(".me-keyboard>li.u-complate"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    await viewer.trigger("click");
    expect(wrapper.emitted("on-complate")).toBeDefined();
  });
});
