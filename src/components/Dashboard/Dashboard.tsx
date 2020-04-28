import React from 'react'
import { PlansFilter } from '../PlansFilter'

import './Dashboard.css'
import { Header } from './Header'

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <PlansFilter />
      <hr className="dashboard__horizontal-line" />
      <div className="dashboard__table">
        <div className="dashboard__headers">
          <Header title="#" />
          <Header title="Supplier" />
          <Header title="Term" />
          <Header title="Price" />
          <Header title="Estimated Savings" />
          <Header title="Green Energy" />
        </div>
        <div className="dashboard__plans"></div>
      </div>
    </div>
  )
}
