import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { DropDownIcon } from '../../../assets/icons/DropDownIcon'
import { Props, Month } from './types'
import {
  months,
  format,
  setMonth,
  dateIsBefore,
  dateIsSameYear,
} from './format'

import './Datepicker.css'

export const Datepicker: React.FC<Props> = ({ defaultDate }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    defaultDate ?? new Date()
  )
  const [currentDate, setCurrentDate] = useState<Date>(
    defaultDate ?? new Date()
  )

  const onSelectDate = (index: number) => {
    const date = new Date(currentDate)
    setSelectedDate(setMonth(date, index))
  }

  const onBackDate = () => {
    const currentYear = currentDate.getFullYear()
    const date = new Date(currentDate)
    date.setFullYear(currentYear - 1)

    setCurrentDate(date)
  }

  const onNextDate = () => {
    const currentYear = currentDate.getFullYear()
    const date = new Date(currentDate)
    date.setFullYear(currentYear + 1)

    setCurrentDate(date)
  }

  const renderMonth = (month: Month, index: number) => {
    const date = setMonth(currentDate, index)
    const today = new Date()

    return (
      <div
        onClick={() => onSelectDate(index)}
        key={month.name}
        className={`datepicker__month ${
          dateIsBefore(date, today) ? 'datepicker__month_disabled' : ''
        }`}>
        {month.short}
      </div>
    )
  }

  return (
    <div className="datepicker">
      <button className="datepicker__trigger">
        <span className="datepicker__label">Date</span>
        <span className="datepicker__value">{format(selectedDate)}</span>
        <ArrowDropDownIcon className="datepicker__dropdown-icon" />
      </button>
      <button className="datepicker__content">
        <div className="datepicker__header">
          <div
            onClick={onBackDate}
            className={`datepicker__switch-date ${
              dateIsSameYear(currentDate, new Date())
                ? 'datepicker__switch-date_disabled'
                : ''
            }`}>
            <DropDownIcon className="datepicker__back" />
          </div>
          <span className="datepicker__year">{currentDate.getFullYear()}</span>
          <div onClick={onNextDate} className="datepicker__switch-date">
            <DropDownIcon className="datepicker__next" />
          </div>
        </div>
        <div className="datepicker__months">{months.map(renderMonth)}</div>
      </button>
    </div>
  )
}
