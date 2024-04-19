<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 优惠券 -->
  <ul class="coupon">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-coupon v-bind="item" v-if="index < listData.length - 1" />
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

<style scoped lang="less">
@import './index.less';
</style>
