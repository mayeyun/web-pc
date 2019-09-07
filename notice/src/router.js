import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes:[
    {
      path: '/',
      component: resolve => require(['./pages/index'], resolve)
    },
    {
        path:'/detail',
        component:resolve =>require(['./pages/detail'],resolve)
    },
    {
        path:'/addNotice',
        component:resolve =>require(['./pages/addNotice'],resolve)
    },
    {
        path:'/addGroup',
        component:resolve =>require(['./pages/addGroup'],resolve)
    }
]
  
})

export default router;
