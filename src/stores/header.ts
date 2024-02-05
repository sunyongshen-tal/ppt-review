import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeaderStore = defineStore('header', () => {
  // 是否展示目录
  const showTableContent = ref(false)

  return {
    showTableContent
  }
})
