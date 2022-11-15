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
  }
]
export default createRouter({
  history,
  routes
})

