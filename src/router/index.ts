import { createRouter, createWebHistory } from 'vue-router'

//路由列表
const routes = [
  {
    path: '/index',
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/index',
  },
]

//创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 }
  },
})

//路由前置守卫
router.beforeEach((to, from, next) => {
  next()
})

//路由后置守卫
router.afterEach((to, from) => {})

export default router
