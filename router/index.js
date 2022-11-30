import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const routes = [
  {
    path: '/', 
    component: () => import('/src/index.vue'),
  },
  {
    path: '/base', 
    component: () => import('/src/views/base.vue'),
  },
  {
    path: '/buffer', 
    component: () => import('/src/views/BufferGeometry.vue'),
  },
  {
    path: '/material', 
    component: () => import('/src/views/materialDemo.vue'),
  },
  {
    path: '/loadManager', 
    component: () => import('/src/views/LoadManager.vue'),
  },
  {
    path: '/envmap', 
    component: () => import('/src/views/EnvMapDemo.vue'),
  }
]
export default createRouter({
  history,
  routes
})

