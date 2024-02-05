<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function onControlClick(type: 'left' | 'right') {
  const id = +route.params.id
  if (type === 'left') {
    if (id > 1) {
      router.push(`/page/${id - 1}`)
    }
  } else {
    if (id < 6) {
      router.push(`/page/${id + 1}`)
    }
  }
}
</script>

<template>
  <main class="top-right-bg page-view">
    <video
      controls
      webkit-playsinline
      playsinline
      class="main-video"
      :src="'/videos/p' + route.params.id + '.mp4'"
    ></video>
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

  .main-video {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 80%;
    transform: translateY(-50%);
    object-fit: contain;
  }

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
