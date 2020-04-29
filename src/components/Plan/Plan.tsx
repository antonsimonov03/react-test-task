import React from 'react'
import { Label } from '../atoms/Label'
import { Button } from '../atoms/Button'

import './Plan.css'
import logo from '../../assets/hudson.png'

export const Plan = () => {
  return (
    <div className="plan">
      <div className="plan__index">
        <span className="plan__index-number">1</span>
        <hr className="plan__vertical-line" />
      </div>
      <div className="plan__supplier">
        <img className="plan__supplier-logo" src={logo} alt="supplier logo" />
        <span className="plan__supplier-name">Hudson Energy</span>
      </div>
      <div className="plan__term">
        <Label title="12 months" type="black" />
      </div>
      <div className="plan__price">
        <Label title="$5.910" type="blue" />
      </div>
      <div className="plan__savings">
        <Label title="$2,235.00" type="green" />
      </div>
      <div className="plan__green-energy">
        <Label title="25%" type="blue" />
      </div>
      <div className="plan__actions">
        <Button variant="outlined" color="green">
          Select Plan
        </Button>
        <Button variant="text" color="gray">
          Details
        </Button>
      </div>
    </div>
  )
}
