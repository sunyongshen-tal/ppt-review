<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const videoEle = ref<HTMLVideoElement | null>(null)
</script>

<template>
  <video
    ref="videoEle"
    class="main-video"
    controls
    webkit-playsinline
    playsinline
    autoplay
    preload="auto"
    :src="'/videos/p' + route.params.pageId + '.mp4'"
  ></video>
</template>

<style scoped>
.main-video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  max-width: 80%;
  max-height: 100%;
  aspect-ratio: 16 / 9;
  transform: translate(-50%, -50%);
  object-fit: contain;
}
</style>
