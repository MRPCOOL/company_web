import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/company_web',
    name: 'alias_home',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: '江西慧点奇丰科技有限公司--专注全栈开发3年', 
      description: '江西慧点奇丰科技有限公司专注于全栈开发，提供高质量的软件解决方案，助力企业数字化转型。' 
    }
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: '江西慧点奇丰科技有限公司--专注全栈开发3年', 
      description: '江西慧点奇丰科技有限公司专注于全栈开发，提供高质量的软件解决方案，助力企业数字化转型。' 
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { 
      title: '联系我们-江西慧点奇丰科技有限公司', 
      description: '为您提供全栈开发服务，联系我们了解更多信息。' 
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue'),
    meta: { 
      title: '关于我们-江西慧点奇丰科技有限公司', 
      description: '江西慧点奇丰科技有限公司专注于全栈开发，提供高质量的软件解决方案，助力企业数字化转型。' 
    }
  },
  // Catch all route for 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { 
      title: 'Page Not Found - Colla', 
      description: 'The page you are looking for does not exist.' 
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 设置页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '江西慧点奇丰科技有限公司'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  next()
})

export default router 
