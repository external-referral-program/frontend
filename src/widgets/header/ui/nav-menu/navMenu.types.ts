export interface IMenuItem {
  title: string
  path: string
}

export interface ILastItem {
  title: string
  elements: Array<IMenuItem>
}
