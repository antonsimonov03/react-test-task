import React from 'react'
import { PlansFilter } from '../PlansFilter'

import './Dashboard.css'
import { Header } from './Header'
import { Plan } from '../Plan'

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
        <ul className="dashboard__plans">
          <li>
            <Plan />
          </li>
          <li>
            <Plan />
          </li>
          <li>
            <Plan />
          </li>
        </ul>
      </div>
    </div>
  )
}
