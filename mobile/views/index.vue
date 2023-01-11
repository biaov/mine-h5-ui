<template>
  <!-- 首页 -->
  <div class="m-index">
    <div class="m-hd">
      <h3 class="u-tit">
        <img src="@/assets/logo.svg" alt="" />
        <span>MINE-H5-UI</span>
      </h3>
      <p class="u-desc">一款轻量级、模块化基于VUE的H5前端UI组件库</p>
    </div>
    <ul class="m-list-first">
      <li v-for="(item, index) in listData" :key="index">
        <h3 class="u-tit">{{ item.meta.title }}</h3>
        <ul class="m-list-second">
          <li v-for="(it, i) in item.items" :key="i">
            <router-link :to="{ name: it.name }">
              <span>{{ it.meta.title }}</span>
              <me-icon name="icon-right1" size="20px" color="#949494"></me-icon>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import NavConfig from '@/config/nav.config.json?v=1'

export default {
  data() {
    return {
      listData: NavConfig['组件']
    }
  }
}
</script>
<style scoped lang="less">
@padding-15: 15px;

.m-index {
  padding: @padding-15;
  .same-padding {
    padding: 0 @padding-15;
  }
  .same-font {
    color: @font-color-reduce;
    font-size: @font-size;
  }
  .m-hd {
    margin-bottom: 30px;
    .u-tit {
      display: flex;
      align-items: center;
      width: 100%;
      height: 60px;
      > img {
        width: 50px;
        margin-right: 15px;
      }
      > span {
        color: @font-color;
        font-size: 26px;
        font-weight: 500;
      }
    }
    .u-desc {
      .same-font;
    }
  }
  .m-list-first {
    .u-tit {
      .same-padding;
      .same-font;
      height: 30px;
      line-height: 30px;
    }
    .m-list-second {
      > li {
        margin-bottom: 10px;
        > a {
          .same-padding;
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 40px;
          line-height: 40px;
          border-radius: 100px;
          background: #f7f8fa;
          color: @font-color;
          font-size: @font-size;
        }
      }
    }
  }
}
</style>
