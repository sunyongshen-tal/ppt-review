<script lang="ts" setup>
import { useHeaderStore } from '@/stores/header'
import { useRouter } from 'vue-router'

const router = useRouter()
const headerStore = useHeaderStore()

function gotoPage() {
  headerStore.showTableContent = false
  router.push('/page/1')
}
</script>

<template>
  <section class="top-right-bg table-content">
    <div class="top-right-bg contnet-list" @click="gotoPage"></div>
  </section>
</template>

<style lang="less" scoped>
.table-content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('../assets/content-bg.png');
  color: #fff;

  .contnet-list {
    position: absolute;
    top: 60px;
    left: 5%;
    width: 90%;
    height: 90%;
    background-image: url('../assets/table-content.png');
    background-size: contain;
  }
}
</style>
