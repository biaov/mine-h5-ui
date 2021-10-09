import { mount } from "@vue/test-utils";
import MeDatetimePicker from "~/MeDatetimePicker/index.vue";

describe("MeDatetimePicker", () => {
  const visible = true;
  test("props visible", () => {
    // 向组件里传参
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    });
    const viewer = wrapper.find(".me-datetime-picker"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
  });
  test("props type", async () => {
    // 向组件里传参
    const wrapper = mount(MeDatetimePicker, {
      props: { visible, type: "date" }
    });
    const viewer = wrapper.findAll(".me-datetime-picker .m-bd>li"); // 获取 DOM
    expect(viewer[0].exists()).toBeTruthy();
    expect(viewer.length).toBe(3);
  });
  test("props minDate", async () => {
    const year = new Date().getFullYear() - 6;
    const minDate = new Date();
    minDate.setFullYear(year);
    // 向组件里传参
    const wrapper = mount(MeDatetimePicker, {
      props: { visible, minDate }
    });
    const viewer = wrapper.find(".me-datetime-picker .m-bd>li:first-child>ol>li:first-child"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    expect(viewer.text()).toBe(`${year}`);
  });
  test("props maxDate", async () => {
    const year = new Date().getFullYear() + 6;
    const maxDate = new Date();
    maxDate.setFullYear(year);
    // 向组件里传参
    const wrapper = mount(MeDatetimePicker, {
      props: { visible, maxDate }
    });
    const viewer = wrapper.find(".me-datetime-picker .m-bd>li:first-child>ol>li:last-child"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    expect(viewer.text()).toBe(`${year}`);
  });
  test("emit on-cancel", async () => {
    // 向组件里传参
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    });
    const viewer = wrapper.find(".me-datetime-picker .m-hd .u-cancel"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    await viewer.trigger("click");
    expect(wrapper.emitted("on-cancel")).toBeDefined();
  });
  test("emit on-sure", async () => {
    // 向组件里传参
    const wrapper = mount(MeDatetimePicker, {
      props: { visible }
    });
    const viewer = wrapper.find(".me-datetime-picker .m-hd .u-sure"); // 获取 DOM
    expect(viewer.exists()).toBeTruthy();
    await viewer.trigger("click");
    expect(wrapper.emitted("on-sure")).toBeDefined();
  });
});
