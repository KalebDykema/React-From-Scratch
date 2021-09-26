import React from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'

const App = () => (
  <div>
    <h1>Hello world</h1>
    <h3>From inside ./app.tsx, which is bundled to public/bundle.js</h3>
  </div>
)

ReactDOM.render(<App/>, document.getElementById('root'))