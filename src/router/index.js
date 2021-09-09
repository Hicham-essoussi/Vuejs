import Vue from 'vue'
import VueRouter from 'vue-router'
import CompanyHome from '../components/CompanyHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CompanyHome
  },
  {
    path: '/team',
    name: 'Team',
   
    component: () => import('../components/CompanyTeam.vue')
  },
  {
    path: '/teamMA',
    name: 'TeamMA',
   
    component: () => import('../components/CompanyTeamMA.vue')
  },
  {
    path: '/teamRD',
    name: 'TeamRD',
   
    component: () => import('../components/CompanyTeamRD.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
