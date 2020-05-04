import { Month } from './types'

export const months: Month[] = [
  { name: 'January', short: 'Jan' },
  { name: 'February', short: 'Feb' },
  { name: 'March', short: 'Mar' },
  { name: 'April', short: 'Apr' },
  { name: 'May', short: 'May' },
  { name: 'June', short: 'Jun' },
  { name: 'July', short: 'Jul' },
  { name: 'August', short: 'Aug' },
  { name: 'September', short: 'Sep' },
  { name: 'October', short: 'Oct' },
  { name: 'November', short: 'Nov' },
  { name: 'December', short: 'Dec' },
]

export const format = (date: Date): string => {
  return `${months[date.getMonth()].name}, ${date.getFullYear()}`
}

export const setMonth = (date: Date, index: number): Date => {
  const _date = new Date(date)
  _date.setMonth(index)

  return _date
}
