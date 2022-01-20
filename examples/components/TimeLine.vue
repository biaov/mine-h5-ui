<template>
  <!-- 时间线 -->
  <div class="m-timeline">
    <div class="u-dot"></div>
    <div class="u-tail"></div>
    <div class="m-cont">
      <slot name="timeline"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TimeLine",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.m-timeline {
  position: relative;
  padding: 0 0 5px 24px;
  .same-position {
    position: absolute;
    top: 8px;
  }
  .u-dot {
    .same-position;
    z-index: 2;
    left: 0;
    width: 14px;
    height: 14px;
    border: 2px solid @color-danger;
    border-radius: 50%;
    background-color: @color-default;
  }
  .u-tail {
    .same-position;
    left: 6px;
    height: 110%;
    border-left: 2px solid @border-color-line;
  }
  .m-cont {
    h2 {
      color: @color-primary;
    }
    > div {
      > ul {
        margin-bottom: 0;
        ul {
          margin: 5px 0 10px;
        }
      }
    }
  }
}
</style>