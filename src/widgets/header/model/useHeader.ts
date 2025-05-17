import type { IMenuItem, ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'
import { SECTION_PATHS } from '@/shared/ui/sections/sectionIds'

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

const lastItem: ILastItem = {
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

export const useHeader = () => {
  return {
    menuItems,
    lastItem,
  }
}
