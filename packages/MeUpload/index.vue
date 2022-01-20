<template>
  <!-- 上传图片 -->
  <div class="me-upload" :aria-disabled="disabled">
    <!-- 展示图片 -->
    <div class="m-imgs" v-for="item in listData" :key="item.id" @click="onPreview(item)">
      <img :src="item.url" class="u-img" width="100%" alt="图片">
      <me-icon name="icon-close" color="#dcdee0" size="16px" @on-click="onDelete($event,item)" v-if="deletable"></me-icon>
    </div>
    <!-- 上传按钮 -->
    <div class="m-upload" v-if="listData.length<maxCount">
      <me-icon name="icon-xiangji" color="#dcdee0" size="20px"></me-icon>
      <input type="file" class="u-file" :multiple="multiple" @change="onChange" :disabled="disabled">
    </div>
    <!-- 图片预览 -->
    <div class="m-preview" v-if="isPreview" @click="closePreview">
      <div class="u-num">{{curNum}} / {{listData.length}}</div>
      <transition-group tag="ul" name="slider" class="m-slider">
        <li v-for="item in listData" :key="item.id" v-show="curNum === item.id"><img :src="item.url" width="100%" alt="图片"></li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import MeIcon from "~/MeIcon";
import Validator from "~/MeAPI/validator";
let timer = null;
export default {
  name: "MeUpload",
  components: {
    MeIcon
  },
  model: {
    prop: "fileList"
  },
  props: {
    // v-model绑定值
    fileList: {
      type: Array,
      default: () => []
    },
    // 图片是否可预览
    preview: {
      type: Boolean,
      default: true
    },
    // 最大上传数量
    maxCount: {
      type: Number,
      default: 1000
    },
    // 文件大小设置
    maxSize: {
      type: Number,
      default: 2 * 1024 * 1024
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 是否展示删除按钮
    deletable: {
      type: Boolean,
      default: true
    },
    // 禁止状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 文件读取前钩子函数
    beforeRead: {
      type: Function,
      default: () => () => true
    },
    // 文件读取完钩子函数
    afterRead: {
      type: Function,
      default: () => () => true
    },
    // 文件删除前钩子函数
    beforeDelete: {
      type: Function,
      default: () => () => true
    }
  },
  data() {
    return {
      listData: this.fileList, // 列表数据
      curNum: 1, // 全屏预览图片当前索引
      isPreview: false // 预览图片显示状态
    };
  },
  methods: {
    // 点击删除按钮
    onDelete(e, item) {
      e.stopPropagation();
      const { disabled, beforeDelete, listData } = this;
      // 判断是否允许删除文件
      if (!disabled && beforeDelete(item) !== false) {
        let i = 0; // 索引
        // 循环遍历数组定位下标位置
        for (; i < listData.length; i++) {
          // 判断id是否相等
          if (listData[i].id === item.id) {
            break;
          }
        }
        listData.splice(i, 1); // 删除
        this.$emit("input", listData);
        this.$emit("on-change", listData);
      }
    },
    // 开启轮播
    startTimer() {
      const { listData } = this;
      // 判断数组是否大于1
      if (listData.length > 1) {
        timer = setInterval(() => {
          this.curNum++;
          // 改变当前图片索引
          if (this.curNum > listData.length) {
            this.curNum = 1;
          }
        }, 3000);
      }
    },
    // 点击预览图片
    closePreview() {
      clearInterval(timer);
      this.isPreview = false;
    },
    // 点击上传图片按钮
    onChange(e) {
      const { beforeRead, afterRead, maxSize, maxCount, listData } = this;
      const files = Object.values(e.target.files).slice(0, maxCount); // 获取不超过maxCount文件
      // 判断是否允许读取文件
      if (beforeRead(files) !== false) {
        // 循环遍历添加数据
        const arr = [];
        files.forEach(elem => {
          // 判断大小是否小于或等于maxSize
          if (elem.size <= maxSize && Validator.validImgs.test(elem.name)) {
            const len = listData.length; // 数组长度
            const id = len === 0 ? 1 : listData[len - 1].id + 1; // 获取id
            const url = window.URL.createObjectURL(elem); // 创建blob预览图片地址
            listData.push({ id, url }); // 添加进数组
            arr.push(elem);
          }
        });
        // 符合规则的图片数组
        if (arr.length > 0) {
          afterRead(arr);
          this.$emit("on-change", listData);
        }
      }
    },
    // 点击预览图片
    onPreview({ id }) {
      const { disabled, preview } = this;
      // 判断是否允许预览
      if (!disabled && preview) {
        this.curNum = id;
        this.isPreview = true; // 打开图片预览
        this.startTimer(); // 开启自动轮播图
      }
    }
  },
  watch: {
    // 监听列表数据
    fileList: {
      handler(value) {
        this.listData = value;
      },
      deep: true
    }
  }
};
</script>