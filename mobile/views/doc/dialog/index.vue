<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 对话框 -->
  <ul class="dialog">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-dialog v-model:visible="it.visible" tips="提示">
            <div class="text">
              走在斑马线上的好处：
              <br />
              我就是一个行人，
              <br />
              赔的多一点！
            </div>
            <div class="btn">
              <button type="button" class="btn-cancel" @click="onCancel(it)">取消</button>
              <button type="button" class="btn-confirm" @click="onConfirm(it)">确定</button>
            </div>
          </me-dialog>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onConfirm, onCancel } = useHandle()
</script>
