export type Props = {
  classList?: string
  id: string
  label: string
  defaultValue: string
  items: Item[]
}

type Item = {
  value: any
  title: string
}
