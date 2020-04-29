import React from 'react'

import './Button.css'
import { Props } from './types'

export const Button: React.FC<Props> = ({ variant, color, children }) => {
  return (
    <button className={`button button_${variant}_${color}`}>
      {children}
    </button>
  )
}
