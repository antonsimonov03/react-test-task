import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import { Props } from './types'

import './FilterOption.css'

export const FilterOption: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="filter-option">
      <span className="filter-option__title">{title}</span>
      <ArrowDropDownIcon />
    </div>
  )
}
