import type { IMenuItem, ILastItem } from '@/widgets/header/ui/nav-menu/navMenu.types'

const menuItems: Array<IMenuItem> = [
  {
    title: 'Вопросы',
    path: '/',
  },
  {
    title: 'Вакансии',
    path: '/',
  },
  {
    title: 'Рекомендовать другу',
    path: '/',
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
