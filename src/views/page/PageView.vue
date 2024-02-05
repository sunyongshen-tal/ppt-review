<script lang="ts" setup>
import { usePagesStore } from '@/stores/pages'

const pagesStore = usePagesStore()

function onControlClick(type: 'left' | 'right') {
  pagesStore.pageControl(type)
}
</script>

<template>
  <main class="top-right-bg page-view">
    <RouterView />
    <div class="page-control">
      <button class="control-btn btn-left" @click="onControlClick('left')">
        <img src="./assets/btn-left.png" alt="" />
      </button>
      <button class="control-btn btn-right" @click="onControlClick('right')">
        <img src="./assets/btn-right.png" alt="" />
      </button>
    </div>
  </main>
</template>

<style lang="less" scoped>
.page-view {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url('./assets/page-bg.png');
  color: #fff;

  .page-control {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .control-btn {
      position: absolute;
      width: 21px;
      height: 25px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .btn-left {
      left: calc(10% - 25px);
    }
    .btn-right {
      right: calc(10% - 25px);
    }
  }
}
</style>
