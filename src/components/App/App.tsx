import React from 'react'
import { QuoteForm } from '../QuoteForm'
import { Dashboard } from '../Dashboard'

import './App.css'

export const App = () => {
  return (
    <div className="app">
      <QuoteForm />
      <Dashboard />
    </div>
  )
}
