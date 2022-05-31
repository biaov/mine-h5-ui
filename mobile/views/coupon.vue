<template>
  <!-- 优惠券 -->
  <ul class="m-coupon">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-coupon v-bind="item" v-if="index < listData.length - 1">
        <template v-if="index === 1" #default></template>
      </me-coupon>
      <div class="outside" v-else>
        <me-coupon v-bind="item">
          <div class="cont">
            <div class="left">
              <div class="inline-block">
                <span>50</span>
                <span>元</span>
              </div>
            </div>
            <div class="right">
              <div class="tit">满200减50</div>
              <div class="spec">有效期：2022-05-26</div>
            </div>
          </div>
        </me-coupon>
      </div>
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
          label: '基础用法',
          width: '80%',
          height: '100px'
        },
        {
          label: '带边框',
          width: '80%',
          height: '100px',
          border: '1px dashed rgba(0,0,0,0.2)'
        },
        {
          label: '镂空圆的大小',
          width: '80%',
          height: '100px',
          circleSize: '26px'
        },
        {
          label: '镂空圆的横向位置',
          width: '80%',
          height: '100px',
          circleX: '50%'
        },
        {
          label: '渐变背景',
          width: '80%',
          height: '100px',
          background: 'linear-gradient(90deg, #FF8536, #FF435E)'
        },
        {
          label: '外层渐变背景',
          width: '80%',
          height: '100px',
          circleX: '80px',
          outWidth: `${globalThis.innerWidth - 30}px`,
          circleBg: 'linear-gradient(-45deg, #FF8536, #f56c6c)'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.m-coupon {
  .u-label {
    width: 100%;
    margin-bottom: 15px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  .me-coupon {
    margin: 0 auto 25px;
  }
  .outside {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 160px;
    background: linear-gradient(-45deg, #ff8536, #f56c6c);
    .me-coupon {
      margin: 0;
    }
    .cont {
      display: flex;
      width: 100%;
      height: 100px;
      .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 100%;
        border-right: 1px dashed #ff7b9a;
        background: rgba(247, 56, 99, 0.05);
        color: #f73863;
        font-size: 0;
        span {
          display: inline-block;
          vertical-align: baseline;
          &:first-child {
            font-size: @font-size*2.5;
            font-weight: bold;
            font-family: price;
          }
          &:last-child {
            font-size: @font-size;
          }
        }
      }
      .right {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;
        padding: 0 10px;
        .tit {
          margin-bottom: 4px;
          color: rgba(0, 0, 0, 0.85);
          font-size: @font-size;
          font-weight: bold;
        }
        .spec {
          color: rgba(0, 0, 0, 0.45);
          font-size: @font-size-min;
        }
      }
    }
  }
}
</style>
