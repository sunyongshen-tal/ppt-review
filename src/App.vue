<script setup lang="ts">
import { RouterView } from 'vue-router'
import TableContent from './components/TableContent.vue'
import HeaderFunc from './components/HeaderFunc.vue'
import { useHeaderStore } from './stores/header'
import { storeToRefs } from 'pinia'
import { showToast } from 'vant'

const headerStore = useHeaderStore()
const { showTableContent } = storeToRefs(headerStore)

function onBackClick() {
  showToast('跳转至上一页')
}
</script>

<template>
  <RouterView />
  <TableContent v-show="showTableContent" />
  <HeaderFunc @back-click="onBackClick" @menu-click="showTableContent = !showTableContent" />
</template>

<style>
body {
  width: 100vw;
  height: 100vh;
  background-color: #333;
}

#app {
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
