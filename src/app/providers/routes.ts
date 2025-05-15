import HomeView from '@/pages/public/HomeView.vue'
import NotFoundView from '@/pages/public/NotFoundView.vue'

import ProgressView from '@/pages/protected/ProgressView.vue'
import SettingsView from '@/pages/protected/SettingsView.vue'

import BaseLayout from '@/app/layouts/BaseLayout.vue'

export const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      {
        path: '/account',
        redirect: { name: 'account-settings' },
        children: [
          { path: 'progress', name: 'account-progress', component: ProgressView },
          { path: 'settings', name: 'account-settings', component: SettingsView },
        ],
      },
      {
        path: '/:pathMatch(.*)*',
        component: NotFoundView,
      },
    ],
  },
]
