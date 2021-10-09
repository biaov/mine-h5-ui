import { mount } from "@vue/test-utils";
import { Retarder } from "@/utils/functions";
import MePopup from "~/MePopup/index.vue";

describe("MePopup", () => {
  test("props visible", async () => {
    // 向组件里传参
    const wrapper = mount(MePopup, {
      props: { visible: true }
    });
    await Retarder();
    const viewer = wrapper.find(".me-popup"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    expect(viewer.classes("show")).toBe(true);
  });
  test("props position", async () => {
    const position = "left";
    // 向组件里传参
    const wrapper = mount(MePopup, {
      props: { position }
    });
    const viewer = wrapper.find(".me-popup>div"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    expect(viewer.classes(position)).toBe(true);
  });
  test("emit on-cancel", async () => {
    // 向组件里传参
    const wrapper = mount(MePopup);
    const viewer = wrapper.find(".me-popup"); // 获取 DOM
    await viewer.trigger("click");
    await Retarder();
    expect(wrapper.emitted("on-cancel")).toBeDefined();
  });
});
