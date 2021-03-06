import { createRouter, createWebHistory } from 'vue-router'
import PersonnelInfo from '../views/PersonnelInfo.vue'
import Formation from '../views/Formation.vue'
import Experience from '../views/Experience.vue'
import Langues from '../views/Langues.vue'
import Loisirs from '../views/Loisirs.vue'
import Curriculum_Vitae from '../views/Curriculum_Vitae.vue'
import Download from '../views/Download.vue'

const routes = [
  {
    path: '/',
    name: 'PersonnelInfo',
    component: PersonnelInfo
  },
  {
    path: '/formation',
    name: 'formation',
    component: Formation
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/langues',
    name: 'langues',
    component: Langues
  },
  {
    path: '/loisirs',
    name: 'loisirs',
    component: Loisirs
  },
  {
    path: '/curriculum_Vitae',
    name: 'curriculum_Vitae',
    component: Curriculum_Vitae
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
