<script lang="ts" setup>
import { RouteName } from '@/router/routeName'
import { useHeaderStore } from '@/stores/header'
import { useRouter } from 'vue-router'

const router = useRouter()
const headerStore = useHeaderStore()

function gotoPage() {
  headerStore.showTableContent = false
  router.push({
    name: RouteName.Section,
    params: { pageId: 1 }
  })
}
</script>

<template>
  <section class="top-right-bg table-content">
    <div class="content-list" @click="gotoPage"></div>
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

  .content-list {
    position: absolute;
    width: 90%;
    height: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: center / contain no-repeat url('../assets/table-content.png');
  }
}
</style>
