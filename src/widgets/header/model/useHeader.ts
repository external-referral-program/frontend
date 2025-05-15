import type { IMenuItem, ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'
import { SECTION_IDS } from '@/shared/ui/sections/sectionIds'

const menuItems: Array<IMenuItem> = [
  {
    title: 'Вопросы',
    path: '/',
    id: SECTION_IDS.QUESTIONS,
  },
  {
    title: 'Вакансии',
    path: '/',
    id: SECTION_IDS.VACANCIES,
  },
  {
    title: 'Рекомендовать другу',
    path: '/',
    id: SECTION_IDS.RECOMMEND,
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
