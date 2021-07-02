<template>
  <!-- sidebar -->
  <div class="m-sidebar">
    <ul class="clear-scroll">
      <!-- 一级列表 -->
      <li v-for="(item,index) in Object.keys(listData)" :key="index">
        <div class="u-tit">{{item}}</div>
        <ul class="m-list-first">
          <!-- 二级列表 -->
          <li v-for="(its,ins) in listData[item]" :key="ins">
            <router-link v-if="!its.items" :to="{name:its.name}" :class="{spot:its.name==='logs'}">{{its.meta.title}}</router-link>
            <template v-else>
              <div class="u-tit-second">{{its.meta.title}}</div>
              <ul class="m-list-second">
                <!-- 三级列表 -->
                <li v-for="(it,i) in its.items" :key="i">
                  <router-link :to="{name:it.name}" :title="it.meta.title">{{it.meta.title}}</router-link>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>
<script>
import NavConfig from "@/utils/data/nav.config.json";
export default {
  name: "SideBar",
  data() {
    return {
      listData: NavConfig
    };
  }
};
</script>
<style scoped lang="less">
@color-first: #8dabc4;
@color-second: #999;
@color-third: #949494;
@color-hover: #2d8cf0;
.m-sidebar {
  height: 820px;
  border-right: 1px dashed #c5d9e8;
  .clear-scroll {
    height: 100%;
    padding-right: 10px;
    // 一级标题
    .u-tit {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding-left: 15px;
      color: @color-first;
      font-size: @font-size;
      font-weight: bold;
    }
    // 相同的高度
    .same-height(@color: @color-third, @padding-left: 28px) {
      height: 36px;
      line-height: 36px;
      padding-left: @padding-left;
      color: @color;
      font-size: @font-size;
    }
    // 一级列表
    .m-list-first {
      > li > a {
        .same-height();
        position: relative;
        &.spot::after {
          content: "";
          position: absolute;
          top: 8px;
          left: 85px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: @color-danger;
        }
        &:hover {
          color: @color-hover;
        }
      }
      .u-tit-second {
        .same-height(@color-second);
        font-weight: bold;
      }
      // 二级列表
      .m-list-second {
        > li > a {
          .clamp();
          .same-height(@color-third, 40px);
          &:hover {
            color: @color-hover;
          }
        }
      }
    }
  }
}
</style>