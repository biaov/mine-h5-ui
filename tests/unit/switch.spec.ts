import { mount } from "@vue/test-utils";
import MeSwitch from "~/MeSwitch/index.vue";

describe("MeSwitch", () => {
  test("props disabled", () => {
    // 向组件里传参
    const wrapper = mount(MeSwitch, {
      props: { disabled: true }
    });
    const viewer = wrapper.find(".me-switch"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    expect(viewer.attributes("aria-disabled")).toBe("true");
  });
  test("emit on-click", async () => {
    // 向组件里传参
    const wrapper = mount(MeSwitch);
    const viewer = wrapper.find(".me-switch"); // 获取 DOM
    await viewer.trigger("click");
    expect(wrapper.emitted("on-click")).toBeDefined();
  });
});
