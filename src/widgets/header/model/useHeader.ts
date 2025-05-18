import type { IMenuItem, ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'
import { SECTION_PATHS } from '@/shared/ui/sections/sectionIds'
import { useUserStore } from '@/entities/user/model/store'
import { computed } from 'vue'

const menuItems: Array<IMenuItem> = [
  {
    title: 'Вопросы',
    path: SECTION_PATHS.QUESTIONS,
  },
  {
    title: 'Вакансии',
    path: SECTION_PATHS.VACANCIES,
  },
  {
    title: 'Рекомендовать друга',
    path: SECTION_PATHS.RECOMMEND,
  },
]

export const useHeader = () => {
  const userStore = useUserStore()

  const lastItem = computed<ILastItem>(() => {
    if (userStore.isAuthenticated) {
      return {
        title: 'Личный кабинет',
        elements: [
          {
            title: 'Прогресс',
            path: '/account/progress',
          },
          {
            title: 'Настройки',
            path: '/account/settings',
          },
        ],
      }
    }

    return {
      title: 'Личный кабинет',
      elements: [
        {
          title: 'Войти',
          path: '/signin',
        },
        {
          title: 'Зарегистрироваться',
          path: '/signup',
        },
      ],
    }
  })

  return {
    menuItems,
    lastItem,
  }
}
