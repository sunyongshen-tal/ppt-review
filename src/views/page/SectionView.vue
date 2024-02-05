<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <video
    class="main-video"
    controls
    webkit-playsinline
    playsinline
    :src="'/videos/p' + route.params.pageId + '.mp4'"
  ></video>
</template>

<style scoped>
.main-video {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  transform: translateY(-50%);
  object-fit: contain;
}
</style>
