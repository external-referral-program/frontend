import { defineStore } from 'pinia'
import type { IUser } from '@/entities/user/model/types'
import { logOutUser } from '@/entities/user/model/user.api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as IUser | null,
    token: null as string | null,
    isInitialized: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setAuth(token: string, user: IUser) {
      this.token = token
      this.user = user
      localStorage.setItem('access_token', token)
      localStorage.setItem('user', JSON.stringify(user))
    },

    async clearAuth() {
      try {
        // await logOutUser()

        this.token = null
        this.user = null
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
      } catch (e) {
        console.error(e)
      }
    },

    init() {
      if (this.isInitialized) return
      this.isInitialized = true

      const token = localStorage.getItem('access_token')
      const userJson = localStorage.getItem('user')

      if (token) {
        this.token = token
      }
      if (userJson) {
        try {
          this.user = JSON.parse(userJson)
        } catch {
          this.user = null
        }
      }
    },
  },
})
