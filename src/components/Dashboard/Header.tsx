import React from 'react'

import icon from '../../assets/headers-icon.svg'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__title">{title}</div>
      <img
        src={icon}
        alt="dashboard header icon"
        className="dashboard-header__icon"
      />
    </div>
  )
}
