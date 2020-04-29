import React from 'react'

import './Label.css'
import { Props } from './types'

export const Label: React.FC<Props> = ({ title, type }: Props) => {
  return (
    <div className={`label label_${type}`}>
      <span className="label-title">{title}</span>
    </div>
  )
}
