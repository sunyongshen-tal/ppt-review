import { RouteName } from '@/router/routeName'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export type PPTRoadMap = {
  id: number
  title: string
  content: string
  type: 'section' | 'question'
}
export const usePagesStore = defineStore('pages', () => {
  const pptRoadMap = ref<Array<PPTRoadMap>>([
    {
      id: 1,
      title: '第一章',
      content: '第一章内容',
      type: 'section'
    },
    {
      id: 2,
      title: '第二章',
      content: '第二章内容',
      type: 'section'
    },
    {
      id: 3,
      title: '第三章',
      content: '第三章内容',
      type: 'section'
    },
    {
      id: 4,
      title: '第四章',
      content: '第四章内容',
      type: 'section'
    },
    {
      id: 5,
      title: '第五章',
      content: '第五章内容',
      type: 'section'
    },

    {
      id: 1,
      title: '第一题',
      content: '第一题内容',
      type: 'question'
    },
    {
      id: 6,
      title: '第六章',
      content: '第六章内容',
      type: 'section'
    }
  ])

  const route = useRoute()
  const router = useRouter()
  function pageControl(type: 'left' | 'right') {
    const routeType = route.name === RouteName.Section ? 'section' : 'question'
    const id = +route.params.pageId
    const curRoad = pptRoadMap.value.find((item) => item.id === id && item.type === routeType)
    if (!curRoad) return
    const curIndex = pptRoadMap.value.indexOf(curRoad)
    const nextRoad = pptRoadMap.value[curIndex + (type === 'left' ? -1 : 1)]
    if (!nextRoad) return
    router.push({
      name: nextRoad.type === 'section' ? RouteName.Section : RouteName.Question,
      params: { pageId: nextRoad.id }
    })
  }

  return {
    pptRoadMap,
    pageControl
  }
})
