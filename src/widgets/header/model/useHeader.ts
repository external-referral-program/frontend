import type { IMenuItem } from '@/widgets/header/ui/nav-menu/navMenu.types'

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

const lastItem: IMenuItem = {
  title: 'Личный кабинет',
  path: '/account',
}

export const useHeader = () => {
  return {
    menuItems,
    lastItem,
  }
}
