import { computed } from 'vue'

const MENU_ITEMS = [
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

export const useHeader = () => {
  const menuItems = computed(() => MENU_ITEMS)

  return {
    menuItems,
  }
}
