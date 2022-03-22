import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'







const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    
      <App />
    
  </Suspense>,
  document.getElementById('root')
)
