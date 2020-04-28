import React from 'react'
import { FilterOption } from '../atoms/FilterOption'

import './PlansFilter.css'

export const PlansFilter = () => {
  return (
    <div className="plans-filter">
      <h5 className="plans-filter__title">Filter by:</h5>
      <div className="plans-filter__options">
        <div className="plans-filter__filter-group">
          <FilterOption title="Suppliers" />
          <FilterOption title="Terms" />
        </div>
        <FilterOption title="Sort - Price" />
      </div>
    </div>
  )
}
