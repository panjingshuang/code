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
  }
]
export default createRouter({
  history,
  routes
})

