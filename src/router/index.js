import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: 'Colla - Automate Brand Collaborations', 
      description: 'Automate every brand collab, from inbox to income with Colla.' 
    }
  },
  {
    path: '/price',
    name: 'price',
    component: () => import('../views/PriceView.vue'),
    meta: { 
      title: 'Pricing - Colla', 
      description: 'View pricing plans for Colla brand collaboration automation tools.' 
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: 'Products - Colla', 
      description: 'Explore Colla products for brand collaboration automation.' 
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: 'Projects - Colla', 
      description: 'View Colla projects and case studies.' 
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue'),
    meta: { 
      title: 'About - Colla', 
      description: 'Learn more about Colla and our mission.' 
    }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: 'Privacy Policy - Colla', 
      description: 'Colla privacy policy and data protection information.' 
    }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/HomeView.vue'),
    meta: { 
      title: 'Terms of Service - Colla', 
      description: 'Colla terms of service and user agreement.' 
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
  history: createWebHistory(),
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
  document.title = to.meta.title || 'Colla'
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description || '')
  }
  next()
})

export default router 