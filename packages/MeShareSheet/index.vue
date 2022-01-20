<template>
  <!-- 分享面板 -->
  <div class="me-share-sheet" :class="{show:isShow}" @click="hideMask" v-show="isShowMask">
    <div class="m-picker" :class="{show:isShow}" @click.stop>
      <!-- 提示语 -->
      <h3 class="u-tips">{{tips}}</h3>
      <!-- 分享列表 -->
      <ul class="m-list-li">
        <li v-for="(item,index) in list" :key="index" @click="onLi(item)">
          <i class="iconfont u-icon" :class="item.icon" :style="`color:${item.color};`"></i>
          <span class="u-desc">{{item.value}}</span>
        </li>
      </ul>
      <!-- 取消按钮 -->
      <button type="button" class="u-btn-cancel" @click="onCancel">取消</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeShareSheet",
  props: {
    // v-model 绑定值
    value: {
      type: Boolean,
      default: false
    },
    // 提示文本
    tips: {
      type: String,
      default: "立即分享给好友"
    },
    // 数据列表
    list: {
      type: Array,
      validator: value => value.length > 0 && Object.keys(value[0]).length > 0
    }
  },
  data() {
    return {
      isShowMask: false, // 是否显示模态框
      isShow: false // 是否显示模态框的过渡动画
    };
  },
  methods: {
    // 显示模态框
    showMask() {
      const that = this;
      that.isShowMask = true;
      setTimeout(() => {
        that.isShow = true;
      }, 100);
    },
    // 隐藏模态框
    hideMask() {
      const that = this;
      that.isShow = false;
      setTimeout(() => {
        that.isShowMask = false;
        that.$emit("input", false);
      }, 400);
    },
    // 点击列表
    onLi(item) {
      const that = this;
      that.$emit("input", false);
      that.$emit("on-change", item);
    },
    // 点击取消按钮
    onCancel() {
      const that = this;
      that.$emit("input", false);
      that.$emit("on-cancel");
    }
  },
  watch: {
    // 监听是否显示弹出层参数
    value(value) {
      const { showMask, hideMask } = this;
      value ? showMask() : hideMask();
    }
  }
};
</script>