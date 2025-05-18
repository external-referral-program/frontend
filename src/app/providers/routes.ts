import HomeView from '@/pages/public/HomeView.vue'
import NotFoundView from '@/pages/public/NotFoundView.vue'

import ProgressView from '@/pages/protected/ProgressView.vue'
import SettingsView from '@/pages/protected/SettingsView.vue'
import SignUpView from '@/pages/public/SignUpView.vue'
import SignInView from '@/pages/public/SignInView.vue'

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
          {
            path: 'progress',
            name: 'account-progress',
            component: ProgressView,
            meta: { requiresAuth: true },
          },
          {
            path: 'settings',
            name: 'account-settings',
            component: SettingsView,
            meta: { requiresAuth: true },
          },
        ],
      },
      { path: '/signup', name: 'signup', component: SignUpView, meta: { requiresGuest: true } },
      { path: '/signin', name: 'signin', component: SignInView, meta: { requiresGuest: true } },

      {
        path: '/:pathMatch(.*)*',
        component: NotFoundView,
      },
    ],
  },
]
