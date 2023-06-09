import React from 'react'
import { createRoot } from 'react-dom/client'
import Pages from './pages'
import './css.css'
import './_variables.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
      <Pages />
  </React.StrictMode>
)
