export interface IMenuItem {
  title: string
  path: string
  id: string
}

export interface ILastItem {
  title: string
  elements: Array<{ title: string; path: string }>
}
