<script lang="ts" setup>
import { watch } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const videoEle = ref<HTMLVideoElement | null>(null)
const loaded = ref(false)

watch(
  () => route.params.pageId,
  () => {
    loaded.value = false
  },
  { immediate: true }
)

function onLoaded() {
  loaded.value = true
}
</script>

<template>
  <video
    ref="videoEle"
    v-show="loaded"
    class="main-video"
    controls
    webkit-playsinline
    playsinline
    autoplay
    preload="auto"
    @canplay="onLoaded"
    :src="'./videos/p' + route.params.pageId + '.mp4'"
  ></video>
  <VanLoading
    v-show="!loaded"
    class="loading-video"
    color="#ff6034"
    size="60px"
    text-size="20px"
    vertical
    >加载中...</VanLoading
  >
</template>

<style scoped>
.main-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* width: 80%; */
  max-width: 80%;
  max-height: 100%;
  aspect-ratio: 16 / 9;
  /* object-fit: contain; */
}

.loading-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
