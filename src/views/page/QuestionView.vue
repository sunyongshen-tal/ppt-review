<script lang="ts" setup>
import { nextTick, onBeforeUnmount, ref } from 'vue'
import { usePagesStore } from '@/stores/pages'

const pagesStore = usePagesStore()
const orderEN = ['A', 'B', 'C', 'D']
const selectItem = ref<Option>()
const superTime = ref(3)
let timer: number | null = null

type Option = {
  id: number
  content: string
}

type Question = {
  id: number
  title: string
  options: Option[]
}

const question: Question = {
  id: 1,
  title: '斯坦式染色将微生物染成什么颜色？',
  options: [
    {
      id: 1,
      content: '紫色'
    },
    {
      id: 2,
      content: '深黄色'
    },
    {
      id: 3,
      content: '浅黄色'
    },
    {
      id: 4,
      content: '深棕色至黑色'
    }
  ]
}

function onOptionClick(item: Option) {
  if (selectItem.value) return
  selectItem.value = item
  startAutoJump()
}

function getOrderEN(id?: number) {
  if (!id) return ''
  return orderEN[question.options.findIndex((item) => item.id === id)]
}

function startAutoJump() {
  timer = setInterval(() => {
    superTime.value--
    if (superTime.value === 0) {
      stopTimer()
      nextTick(() => {
        pagesStore.pageControl('right')
      })
    }
  }, 1000)
}

function stopTimer() {
  timer && clearTimeout(timer)
  timer = null
}

onBeforeUnmount(() => {
  stopTimer()
})
</script>

<template>
  <div class="question-view">
    <div class="question-body">
      <p>{{ question.title }}</p>
      <ul class="answer-list">
        <li v-for="(item, index) in question.options" :key="item.id" @click="onOptionClick(item)">
          {{ orderEN[index] + '.' + item.content }}
        </li>
      </ul>
      <footer class="your-answer" v-show="selectItem">
        <span>你选择了:{{ getOrderEN(selectItem?.id) }}</span>
        <p>{{ superTime }}秒后跳转至下一页...</p>
      </footer>
    </div>
  </div>
</template>

<style lang="less" scoped>
.question-view {
  position: absolute;
  top: 50%;
  left: 10%;
  width: 80%;
  height: 80%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #000;
}

.question-body {
  display: flex;
  flex-direction: column;

  .answer-list {
    padding-left: 10px;
    margin-bottom: 10px;

    * {
      margin-bottom: 10px;
      cursor: pointer;
    }
  }
}

.your-answer {
  position: absolute;
  bottom: 0;
}
</style>
