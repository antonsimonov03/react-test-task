import React, { useState } from 'react'
import { SelectMenu } from '../atoms/SelectMenu/SelectMenu'
import { TextField } from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import { AntSwitch } from '../atoms/AntSwitch'

import './QuoteForm.css'

const commodities = [
  { title: 'Electricity', value: 'Electricity' },
  { title: 'Gas', value: 'Gas' },
]

export const QuoteForm = () => {
  const [entityNameEnabled, setEntityNameEnabled] = useState<boolean>(false)

  const onEntityNameEnabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEntityNameEnabled(event.target.checked)
  }

  return (
    <form className="quote-form">
      <h2 className="quote-form__title">Quote</h2>
      <button disabled className="quote-form__reset reset-button">
        <RefreshIcon fontSize="small" />
        <span className="reset-button__title">Reset all information</span>
      </button>
      <hr className="quote-form__horizontal-line quote-form__horizontal-line_full-width" />
      <TextField
        disabled={!entityNameEnabled}
        className="quote-form__entity-name"
        label="Legal Entity Name"
        variant="outlined"
      />
      <div className="quote-form__entity-name-switch entity-name-switch">
        <h4 className="entity-name-switch__title">Entity Name</h4>
        <AntSwitch onChange={onEntityNameEnabled} />
      </div>
      <hr className="quote-form__horizontal-line" />
      <TextField
        className="quote-form__zip-code"
        label="ZIP Code"
        variant="outlined"
      />
      <SelectMenu
        classList="quote-form__commodity"
        id="commodity"
        defaultValue="Electricity"
        label="Commodity"
        items={commodities}
      />
      <TextField
        className="quote-form__annual-usage"
        label="Total Annual Usage"
        value={0}
        variant="outlined"
        disabled
      />
      <SelectMenu
        classList="quote-form__start-date"
        id="start-date"
        defaultValue="December, 2020"
        label="Contract Start Date"
        items={[{ title: 'December, 2020', value: 'December, 2020' }]}
      />
      <TextField
        className="quote-form__state"
        label="State"
        value="California"
        variant="outlined"
        disabled
      />
      <TextField
        className="quote-form__zone"
        label="Zone"
        value="E"
        variant="outlined"
        disabled
      />
      <TextField
        className="quote-form__utility"
        label="Utility"
        value="PSEG Long Island"
        variant="outlined"
        disabled
      />
      <TextField
        className="quote-form__rate-class"
        label="Rate Class"
        value="E201"
        variant="outlined"
        disabled
      />
      <hr className="quote-form__horizontal-line quote-form__horizontal-line_full-width" />
      <button className="quote-form__search">Search Offers</button>
    </form>
  )
}
