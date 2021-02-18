<template>
  <!-- 图片 -->
  <ul class="m-image">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{item.label}}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="onCopy(it)">
          <me-img :src="it.src" :width="it.width" :height="it.height" :fill="it.fill" :radius="it.radius" @on-click="onCopy(item)"></me-img>
          <span v-if="!!it.width&&!it.height">width:{{it.width}}</span>
          <span v-if="!it.width&&!!it.height">height:{{it.height}}</span>
          <span v-if="!!it.width&&!!it.height">width:{{it.width}};height:{{it.height}}</span>
          <span v-if="!!it.fill">fill:{{it.fill}}</span>
          <span v-if="!!it.radius">radius:{{it.radius}}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      // 列表数据
      listData: [
        {
          id: 1,
          label: "基础用法",
          list: [
            {
              id: 1,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png"
            }
          ]
        },
        {
          id: 2,
          label: "自定义大小",
          list: [
            {
              id: 1,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              width: "45px"
            },
            {
              id: 2,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              height: "45px"
            },
            {
              id: 3,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              width: "45px",
              height: "45px"
            }
          ]
        },
        {
          id: 3,
          label: "填充模式",
          list: [
            {
              id: 1,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              fill: "cover"
            },
            {
              id: 2,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              fill: "contain"
            },
            {
              id: 3,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              fill: "50% auto"
            }
          ]
        },
        {
          id: 4,
          label: "倒角",
          list: [
            {
              id: 1,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              radius: "50%"
            },
            {
              id: 2,
              src: "https://app.biaov.cn/mineapp/images/avatar/2.png",
              radius: "6px"
            }
          ]
        }
      ]
    };
  },
  methods: {
    // 点击图片
    onCopy({ src, width, height, fill, radius }) {
      const { $copyText, $MeToast } = this;
      $copyText(
        `<me-img src="${src}"${!width ? "" : ' width="' + width + '"'}${!height ? "" : ' height="' + height + '"'}${!fill ? "" : ' fill="' + fill + '"'}${
          !radius ? "" : ' radius="' + radius + '"'
        }></me-img>`
      )
        .then(() => {
          $MeToast("复制成功");
        })
        .catch(() => {
          $MeToast("复制失败");
        });
    }
  }
};
</script>
<style scoped lang="less">
.m-image {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }

    .m-list-all {
      .clear-flex();
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 88px;
        margin-bottom: 15px;
        cursor: pointer;
        > span {
          display: block;
          width: 100%;
          text-align: center;
          word-wrap: break-word;
          color: @font-color;
          font-size: @font-size-min;
        }
      }
    }
    .me-img {
      margin-bottom: 10px;
    }
  }
}
</style>